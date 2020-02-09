var contentManager = (function (infr, apiHandler, indexedDb) {
    var infr = infr;
    var api = apiHandler;
    var indexedDb = indexedDb;

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
        return getContentToDisplay()
            .then((contentToDisplay) => {
                var content = contentToDisplay;
                return infr.getInstallData()
                    .then((installData) => {
                        var install = installData;

                        return api.sendShowContentRequest(install.id, content.id);
                    })
                    .then((response) => {
                        return content;
                    });
            })
            .then((contentToDisplay) => {
                if (contentToDisplay.adType === 2) {
                    window.location.replace(contentToDisplay.body.url);
                }
            });
      }

    return {
        requestNewContent: requestNewContent,
        getContentToDisplay: getContentToDisplay,
        show: show,
    };
})(infr, apiHandler, indexedDb);