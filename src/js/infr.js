var infr = (function (indexedDb) {
    var db = indexedDb;

    function getInstallData() {
        return db.readAllData('installs')
        .then((data) => {
            if (Array.isArray(data)) {
                var appGuid = pwaConfig.AppGuid;

                var install = data.find((d) => d.applicationGuid.toLowerCase() == appGuid.toLowerCase());

                return install;
            }
            else {
                return false;
            }
        });
    }

    function getContent() {
        return db.readAllData('content')
        .then((content) => {
            if (Array.isArray(content)) {
                return content;
            }
            else {
                return false;
            }
        });
    }

    return {
        getInstallData: getInstallData,
        getContent: getContent,
    }
})(indexedDb);