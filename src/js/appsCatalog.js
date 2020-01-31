var appsCatalog = (function() {
    var apps = [
        {
            name: 'Chrome',
            applicationId: '07B41AD8-0871-4968-BE2E-BC9886343E1F',
            path: '/apps/chrome/index.html',
        },
        {
            name: 'Instagram',
            applicationId: '8465F664-B83E-4C64-A0AA-C4B9F4701080',
            path: '/l1/ig.html',
        }        
    ];

    function getAppToInstall(installedAppsGuids) {
        for (var app of apps) {
            var installedApp = installedAppsGuids.find((i) => i.toLowerCase() === app.applicationId.toLowerCase());

            if (!installedApp)
                return app;
        }

        return null;
    }

    return {
        getAppToInstall: getAppToInstall,
    }
})();