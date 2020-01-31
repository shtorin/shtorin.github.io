var getParams = (function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    
    function hasParam(paramName) {
        return !!url.searchParams.get(paramName);
    }

    function getParam(paramName) {
        return url.searchParams.get(paramName);
    }

    return {
        hasParam: hasParam,
        getParam: getParam,
    }
})();