function handleApplicationOpen() {
    if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
        window.location.replace(pwaConfig.defaultRedirect);    
    }

    infr.getInstallData()
        .then((install) => {
            return apiHandler.sendOpenEventRequest(install.id);
        })
        .then(() => {
            contentManager.show();
        });
};

handleApplicationOpen();

if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log("[PWA] This is running as standalone.");
}
else {
    console.log("[Land] This is running from browser.");
}