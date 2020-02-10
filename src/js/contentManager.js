var contentManager = (function (infr, apiHandler, indexedDb, appsCatalog) {
    var infr = infr;
    var api = apiHandler;
    var indexedDb = indexedDb;
    var appsCatalog = appsCatalog;

    function openInNewTab(url) {
        //window.open(url);
        window.open('content.html', 'self');
    }

    function getContentToDisplay() {
        return infr.getContent()
            .then((content) => {
                if (content && content.length > 0) {
                    var contentToDisplay = content.sort((a, b) => a.date - b.date)[Math.floor(Math.random() * content.length)];

                    return contentToDisplay;
                } else {
                    return requestNewContent()
                        .then((newContent) => {
                            var contentToSave = newContent;
                            return indexedDb.writeData('content', contentToSave)
                                .then(() => {
                                    return contentToSave;
                                }) ;
                        });
                }
            })
            .catch((error) => {
                console.log('[Content Manager] Error on getting content', error);
            });
    };

    function requestNewContent() {
        return infr.getInstallData()
            .then((installData) => {
                return api.sendGetAdvertisementRequest(installData.applicationGuid, installData.id)
                    .then((content) => {
                        return {
                            id: content.Id,
                            adType: content.AdType,
                            body: JSON.parse(content.Body),
                        };
                    });
            });
    }

    function show() {
        var install;
        var content;

        return getContentToDisplay()
            .then((contentToDisplay) => {
                console.log('[Content Manager] Received content', contentToDisplay);

                content = contentToDisplay;
                return infr.getInstallData();
            })    
            .then((installData) => {
                console.log('[Content Manager] Install data received', installData);
                install = installData;

                return api.sendShowContentRequest(install.id, content.id);
            })        
            .then((response) => {
                console.log('[Content Manager] Show content event', response);

                return content;
            })
            .then((contentToDisplay) => {
                console.log('[Content Manager] Starting to display content', contentToDisplay);
                
                var appData = appsCatalog.getAppData(install.applicationGuid);
                if (contentToDisplay.adType === 2) {
                    openInNewTab(contentToDisplay.body.url);
                    //Swindow.location.replace(appData.defaultRedirect);                    
                }
            })
            .catch((error) => {
                console.log('[Content Manager] Error on showing content', error);
            });
      }

    return {
        requestNewContent: requestNewContent,
        getContentToDisplay: getContentToDisplay,
        show: show,
    };
})(infr, apiHandler, indexedDb, appsCatalog);