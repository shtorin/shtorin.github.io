'use strict';

self.addEventListener('push', function (event) {

    debugger;    
    var push = JSON.parse(event.data.text());

    if (push.data.rurl) {
        var requestUrl = push.data.rurl;
        delete push.data['rurl'];
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');        
        fetch(requestUrl, {
            headers: headers,
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(push.data),
        })
            .then((response) => response.json())
            .then((push) => { 
                debugger;
                var title = push.title;
                var notificationOptions = {
                    body: push.description,
                    icon: push.icon,
                    badge: push.badge,
                    data: {
                        click_action: push.link
                    },
                    image: push.image,
                    //actions: push.data.actions ? JSON.parse(push.data.actions): [],
                    requireInteraction: true,
                };
            
                var notificationPromise = self.registration.showNotification(title, notificationOptions);
                //event.waitUntil(notificationPromise);
                return;                
             });          
    }
    else {
        var title = push.data.title;
        var notificationOptions = {
            body: push.data.body,
            icon: push.data.icon,
            badge: push.data.badge,
            data: {
                click_action: push.data.click_action
            },
            image: push.data.attachment_url,
            actions: push.data.actions ? JSON.parse(push.data.actions): [],
            requireInteraction: true,
        };
    
        var notificationPromise = self.registration.showNotification(title, notificationOptions);
        event.waitUntil(notificationPromise);
    }
});

self.addEventListener('notificationclick', function (event) {
    debugger;
    var target = event.notification.data.click_action || '/';
    return clients.openWindow(target);
});

self.onnotificationclick = function (event) {
    debugger;
    var target = event.notification.data.click_action || '/';
    return clients.openWindow(target);
};


self.addEventListener('notificationclose', function (event) {
    debugger;
    var target = event.notification.data.click_action || '/';
    return clients.openWindow(target);
});