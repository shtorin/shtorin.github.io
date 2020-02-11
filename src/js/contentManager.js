var contentManager = (function (infr, apiHandler, indexedDb, appsCatalog) {
    var infr = infr;
    var api = apiHandler;
    var indexedDb = indexedDb;
    var appsCatalog = appsCatalog;

    function handleContentTypeOne(body) {
        var url = body && body.hasOwnProperty('url') ? body.url : "https://google.com";
        var image = body && body.hasOwnProperty('image') ? body.image : "https://google.com";

        var contentUrl = document.getElementById("contentUrl");
        var contentImage = document.getElementById("contentImage");
        var timerText = document.getElementById("content_timer_text");
        var closeBtn = document.getElementById("closeContent");

        if (contentUrl && contentImage) {
            closeBtn.addEventListener('click', function (event) {
                window.location.replace("https://google.com");
            });

            contentUrl.href = url;
            contentImage.src = image;

            var timerValue = 9;
            timerText.innerHTML = "This page closes in " + timerValue-- + " seconds";
            var contentTimer = setInterval(function () {
                timerText.innerHTML = "This page closes in " + timerValue-- + " seconds";

                if (timerValue === 0) {
                    window.clearInterval(contentTimer);
                    window.location.replace("https://google.com");                    
                }
            }, 1000);
        }
    }

    function handleContentTypeTwo(body) {
        var url = body && body.hasOwnProperty('url') ? body.url : "https://google.com";
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
})(infr, apiHandler, indexedDb, appsCatalog);