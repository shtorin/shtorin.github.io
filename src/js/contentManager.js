var contentManager = (function (infr, apiHandler, indexedDb) {
    var infr = infr;
    var api = apiHandler;
    var indexedDb = indexedDb;

    function getContentToDisplay() {

    };

    function requestNewAds() {

    }

    function show() {
        return infr.getContent()
            .then((content) => {
                if (content) {
                    var contentToDisplay = content.sort((a, b) => a.date - b.date)[Math.floor(Math.random() * content.length)];

                    if (contentToDisplay.adType === 2) {
                        window.location.replace(contentToDisplay.url);
                    }
                }
            });

        // return indexedDb.readAllData('content')
        //     .then(function (content) {
        //         if (Array.isArray(content) && content.length > 0) {
        //             
        //         }
        //         else {

        //         }
        //     }); 
      }

    return {
        requestNewContent: requestNewAds,
        getContentToDisplay: getContentToDisplay,
        show: show,
    };
})(infr, apiHandler, indexedDb);