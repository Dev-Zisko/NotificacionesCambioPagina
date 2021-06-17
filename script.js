"use strict";

if (!('Notification' in  window)) {
	console.log("Las notificaciones no estan disponibles en tu navegador");
}

Notification.requestPermission(() => {
	if (Notification.permission == "granted") {
		new Notification("Primera notificacion");
	}
});

addEventListener("visibilitychange", e => {
	if (e.target.visibilityState == "visible") {
		document.write("Abandonaste la página");
	} else{
		alert("Volviste a la pagina");
	}
});