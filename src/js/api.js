var apiHandler = (function () {
    // var apiUrl = 'https://protopwa.com/';
    var apiUrl = 'http://localhost:50162/';

    var promptEventApiRequestUrl = 'api/events/prompt';
    var openEventApiRequestUrl = 'api/events/open';    
    var installEventApiRequestUrl = 'api/events/install';    
    var getContentRequestUrl = 'api/content/get';   
    var showContentRequestUrl = 'api/content/show';   

    function sendPromptEventRequest() {
        var url_string = window.location.href;
        var url = new URL(url_string);
    
        var affId = url.searchParams.get("aff_id");
        var clickId= url.searchParams.get("click_id");    
    
        var request = buildPromptEventRequest(affId, clickId);
    
        var requestUrl = apiUrl + promptEventApiRequestUrl
        return fetch(requestUrl, getBasicCorsRequestOptions(request))
        .then((response) => {
            console.log('[API] Response on prompt request received');

            return response.json();
        })
        .catch((err) => {
            console.log('[API] Error sending prompt request', err);
        });
    }

    function buildPromptEventRequest(affId, clickId) {
        var request = {
            aid: affId,
            cid: clickId,
            app: pwaConfig.appGuid,
        };
    
        return request;
    }

    function sendInstallEventRequest() {
        var url_string = window.location.href;
        var url = new URL(url_string);
    
        var affId = url.searchParams.get("aff_id");
        var clickId= url.searchParams.get("click_id");    
    
        var request = buildInstallEventRequest(affId, clickId);
    
        var requestUrl = apiUrl + installEventApiRequestUrl;
        return fetch(requestUrl, getBasicCorsRequestOptions(request))
        .then((response) => {                    
            console.log('[API] Response on install request received');

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log('[API] Error sending install request', err);
        });
    }
    
    function buildInstallEventRequest(affId, clickId) {
        var request = {
            aid: affId,
            cid: clickId,
            app: pwaConfig.appGuid,
        };
    
        return request;
    }

    function sendOpenEventRequest (instllationId) {
        console.log('[API] Sending Open request');

        var request = buildOpenEventRequest(instllationId);

        var requestUrl = apiUrl + openEventApiRequestUrl;
        fetch(requestUrl, getBasicCorsRequestOptions(request))
            .then((response) => {
                console.log('[API] Response on open request received', response);
            })
            .catch((err) => {
                console.log('[API] Error sending open request', err);
            });
    };

    function buildOpenEventRequest (installId) {
        var request = {
            app: pwaConfig.appGuid,
            uid: installId,
        };

        return request;
    };

    function getBasicCorsRequestOptions (data) {
        return {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache',
            body: JSON.stringify(data),
        };
    };

    function sendGetContentRequest(appId, pwaInstallId) {
        console.log('[API] Sending content request');

        var request = buildGetContentRequest(appId, pwaInstallId);

        var requestUrl = apiUrl + getContentRequestUrl;
        return fetch(requestUrl, getBasicCorsRequestOptions(request))
            .then((response) => {
                console.log('[API] Response on get content received', response);

                return response.json();
            })
            .catch((err) => {
                console.log('[API] Error sending get content', err);
            });
    }

    function buildGetContentRequest(appId, pwaInstallId) {
        var request = {
            uid: pwaInstallId,
            app: appId,
        };
    
        return request;
    }

    function sendShowContentRequest(pwaInstallId, adId) {
        console.log('[API] Sending show content request');

        var request = buildShowContentRequest(pwaInstallId, adId);

        var requestUrl = apiUrl + showContentRequestUrl;
        return fetch(requestUrl, getBasicCorsRequestOptions(request))
            .then((response) => {
                console.log('[API] Response on show content received', response);

                return response.json();
            })
            .catch((err) => {
                console.log('[API] Error sending show content', err);
            });
    }

    function buildShowContentRequest(pwaInstallId, adId) {
        var request = {
            uid: pwaInstallId,
            adid: adId,
        };
    
        return request;
    }    

    function test() {
        console.log('[API] apiHandler closure', this);
    }

    return {
        sendOpenEventRequest: sendOpenEventRequest,
        sendPromptEventRequest: sendPromptEventRequest,
        sendInstallEventRequest: sendInstallEventRequest,
        sendGetContentRequest: sendGetContentRequest,
        sendShowContentRequest: sendShowContentRequest,
        test: test,
    }
})();