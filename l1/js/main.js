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

		var currentPwaId = pwaConfig.appGuid;
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
		window.location.replace(pwaConfig.defaultRedirect);
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
		var appName = pwaConfig.name;
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

					window.location.replace(pwaConfig.defaultRedirect);
				} else {
					return apiHandler.sendInstallEventRequest();
				}
			})
			.then((sendEventResponse) => {
				console.log('[LandPromise] User added to home screen', sendEventResponse);
				debugger;
				if (sendEventResponse && !sendEventResponse.error) {
					var install = {
						id: sendEventResponse.id,
						applicationGuid: pwaConfig.appGuid,
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
						installedApps.push(pwaConfig.appGuid);

						window.localStorage.setItem('installedApps', installedApps);
					}
					else {
						installedApps = [pwaConfig.appGuid];
						window.localStorage.setItem('installedApps', installedApps);
					}
				}

				deferredPrompt = null;

				window.location.replace(pwaConfig.defaultRedirect);
			})
			.catch((error) => {
				console.log('[Land] Error on handling install event', error);
			});

	}
}