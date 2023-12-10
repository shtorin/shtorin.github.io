'use strict';

self.addEventListener('push', function (event) {
    var push = JSON.parse(event.data.text());

    var title = push.data.title;

    var notificationOptions = {
        body: push.data.body,
        icon: push.data.icon,
        badge: push.data.badge,
        data: {
            click_action: push.data.click_action
        }
    };

    var notificationPromise = self.registration.showNotification(title, notificationOptions);
    event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function (event) {
    var target = event.notification.data.click_action || '/';
    event.notification.close();

    return clients.openWindow(target);
});

function getTrackingPixel(url) {
    var getTrackingPixelPromise = fetch(url);
    return getTrackingPixelPromise;
};

self.addEventListener('activate', function (event) {

});

self.addEventListener('install', function (event) {

});