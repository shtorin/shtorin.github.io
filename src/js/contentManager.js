var contentManager = (function (infr, apiHandler, indexedDb, appsCatalog, pwaConfig) {
    var infr = infr;
    var api = apiHandler;
    var indexedDb = indexedDb;
    var appsCatalog = appsCatalog;
    var pwaConfig = pwaConfig;

    function handleContentTypeOne(body) {
        var contentContainer = $('#contentContainer');
        var content = contentContainer.find('.content');
        var contentImage = content.find('img');
        var timer = contentContainer.find('.timer').find('span');
        var closeButton = contentContainer.find('.content-close');
    
        var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
        var	screenHeight = window.innerHeight ? window.innerHeight : $(window).height();
    
        var url = body && body.hasOwnProperty('url') ? body.url : pwaConfig.defaultRedirect;
        var image = body && body.hasOwnProperty('image') ? body.image  + "?screenWidth=" + screenWidth + "&screenHeight=" + screenHeight : "";
        content.attr('href', url);
        contentImage.attr('src', image);    
    
        closeButton.on('click', function() {
            window.location.replace(pwaConfig.defaultRedirect);
        });
    
        var time = 10;    
        setInterval(function() {
            time--;
    
            if (time >= 0) {
                timer.text(time);
            } else {
                window.location.replace(pwaConfig.defaultRedirect);
            }
        }, 1000);
    }

    function handleContentTypeTwo(body) {
        var url = body && body.hasOwnProperty('url') ? body.url : pwaConfig.defaultRedirect;
        window.location.replace(url);        
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
                return api.sendGetContentRequest(installData.applicationGuid, installData.id)
                    .then((content) => {
                        return {
                            id: content.id,
                            adType: content.adType,
                            body: JSON.parse(content.body),
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
                
                if (contentToDisplay.adType === 2) {
                    handleContentTypeTwo(contentToDisplay.body);               
                } else if (contentToDisplay.adType === 1) {
                    handleContentTypeOne(contentToDisplay.body);     
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
})(infr, apiHandler, indexedDb, appsCatalog, pwaConfig);