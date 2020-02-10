var deferredPrompt;

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function () {
			console.log('[Land] Service worker registered!');
		})
		.catch(function (err) {
			console.log(err);
		});
}

redirectIfInstalled();

function redirectIfInstalled() {
	if ('localStorage' in window) {
		var installedAppsStr = window.localStorage.getItem('installedApps');
		installedAppsStr = installedAppsStr ? installedAppsStr : "";
		var installedApps = installedAppsStr.split(',');

		var currentPwaId = pwaConfig.AppGuid;
		if (Array.isArray(installedApps) && installedApps.includes(currentPwaId)) {
			handleInstalledApp(installedApps);
		}
	}
}

function handleInstalledApp(installedApps) {

	var redirectUrl = getParams.getParam('redirect');

	var appToInstall = appsCatalog.getAppToInstall(installedApps);
	if (appToInstall) {
		var appUrl = appToInstall.path;

		window.location.replace(appUrl);
	}
	else if (redirectUrl) {
		window.location.replace(redirectUrl);
	}
	else {
		window.location.replace(pwaConfig.DefaultRedirect);
	}
};

window.addEventListener('beforeinstallprompt', function (event) {
	console.log('[Land] beforeinstallprompt fired');

	event.preventDefault();
	deferredPrompt = event;
	return false;
});

function installBtnClick() {
	console.log('[Land] Button clicked');

	var userChoice;
	if (deferredPrompt) {
		var appName = pwaConfig.Name;
		deferredPrompt.prompt()
			.then((promptResult) => {
				userChoice = promptResult;

				return apiHandler.sendPromptEventRequest();
			})
			.then((promptEventResponse) => {
				return userChoice;
			})
			.then(function (choiceResult) {
				console.log('[Land] user choice:', choiceResult.outcome);

				if (choiceResult.outcome === 'dismissed') {
					console.log('[Land] User cancelled installation');

					window.location.replace(pwaConfig.DefaultRedirect);
				} else {
					return apiHandler.sendInstallEventRequest();
				}
			})
			.then((sendEventResponse) => {
				console.log('[LandPromise] User added to home screen', sendEventResponse);

				if (sendEventResponse && !sendEventResponse.ErrorMessage) {
					var install = {
						id: sendEventResponse.InstallGuid,
						applicationGuid: pwaConfig.AppGuid,
					};

					return indexedDb.writeData('installs', install);
				}
				else {
					console.log('[Land] Error on sending install request', err);
				}				
			})
			.then(() => {
				if ('localStorage' in window) {

					var installedAppsStr = window.localStorage.getItem('installedApps');
					installedAppsStr = installedAppsStr ? installedAppsStr : "";
					var installedApps = installedAppsStr.split(',');
					if (Array.isArray(installedApps)) {
						installedApps.push(pwaConfig.AppGuid);

						window.localStorage.setItem('installedApps', installedApps);
					}
					else {
						installedApps = [pwaConfig.AppGuid];
						window.localStorage.setItem('installedApps', installedApps);
					}
				}

				deferredPrompt = null;

				window.location.replace(pwaConfig.DefaultRedirect);
			})
			.catch((error) => {
				console.log('[Land] Error on handling install event', error);
			});

	}
}