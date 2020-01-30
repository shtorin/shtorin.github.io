var pwaConfig = {
    AppGuid: '07B41AD8-0871-4968-BE2E-BC9886343E1F',    
};

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

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('[Land] beforeinstallprompt fired');

    event.preventDefault();
    deferredPrompt = event;
    return false;
});

function installBtnClick() {
  console.log('[Land] Button clicked');

  if (deferredPrompt) {
    deferredPrompt.prompt();

    apiHandler.sendPromptEventRequest();

    deferredPrompt.userChoice.then(function (choiceResult) {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === 'dismissed') {
        console.log('[Land] User cancelled installation');

        window.location.replace('https://google.com');
      } else {
        apiHandler.sendInstallEventRequest()
          .then((response) => {
            console.log('[LandPromise] User added to home screen', response);

            if (response && !response.ErrorMessage) {
              var install = {
                id: response.InstallGuid,
                applicationGuid: pwaConfig.AppGuid,
              }
              indexedDb.writeData('installs', install);
            }            
          });

          window.location.replace('https://google.com');
      }
    });

    deferredPrompt = null;
  }
}