var apiHandler = (function () {
    var apiUrl = 'https://protopwa.com/';

    var promptEventApiRequestUrl = 'api/events/prompt';
    var openEventApiRequestUrl = 'api/events/open';    
    var installEventApiRequestUrl = 'api/events/install';    

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
            AffiliateId: affId,
            ClickId: clickId,
            ApplicationGuid: pwaConfig.AppGuid,
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
            AffiliateId: affId,
            ClickId: clickId,
            ApplicationGuid: pwaConfig.AppGuid,
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

    function buildOpenEventRequest (instllationId) {
        var request = {
            ApplicationGuid: pwaConfig.AppGuid,
            PwaInstallId: instllationId,
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

    function test() {
        console.log('[API] apiHandler closure', this);
    }

    return {
        sendOpenEventRequest: sendOpenEventRequest,
        sendPromptEventRequest: sendPromptEventRequest,
        sendInstallEventRequest: sendInstallEventRequest,
        test: test,
    }
})();