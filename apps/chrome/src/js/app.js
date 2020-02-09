var pwaConfig = {
    AppGuid: '07B41AD8-0871-4968-BE2E-BC9886343E1F',    
    Name: 'Chrome'
};

var advertisementInfo = {
    redirectUrl: 'https://google.com',
    advertisementId: '2E7F885F-6A8E-497C-9D74-AFDBBAF001D9',
};

function handleApplicationOpen() {
    indexedDb.readAllData('installs')
        .then((data) => {
            if (Array.isArray(data)) {
                var appGuid = pwaConfig.AppGuid;

                var install = data.find((d) => d.applicationGuid.toLowerCase() == appGuid.toLowerCase());

                return apiHandler.sendOpenEventRequest(install.id);
            } else {
                // re-install
            }
        })
        .then(() => {
            debugger;

            adHandler.showAd();
        });    
};

handleApplicationOpen();

if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log("[PWA] This is running as standalone.");
  }
  else {
    console.log("[Land] This is running from browser.");
  }


function sendAdShowEventRequest() {
    console.log('[PWA] Send AdShowEvent request', advertisementInfo);
};

function showAdvertisement() {
    if (advertisementInfo) {
        console.log('[PWA] Showing advertisement', advertisementInfo);

        sendAdShowEventRequest();        
    }
};

showAdvertisement();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }