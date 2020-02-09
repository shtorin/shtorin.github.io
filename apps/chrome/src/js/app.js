function handleApplicationOpen() {
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

