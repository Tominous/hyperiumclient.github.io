"use strict";function fetchJson(url,callback){var httpRequest=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");httpRequest.onreadystatechange=function(){if(httpRequest.readyState===4){if(httpRequest.status===200){callback(JSON.parse(httpRequest.responseText))}else{callback(undefined,new Error(httpRequest.statusText))}}};httpRequest.open("GET",url);httpRequest.send()}(function(){document.querySelectorAll(".mdc-button, .mdc-list-item").forEach(function(el){return new mdc.ripple.MDCRipple(el)});var topAppBar=new mdc.topAppBar.MDCTopAppBar(document.querySelector(".mdc-top-app-bar"));var drawer=mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));drawer.foundation_.handleScrimClick=function(){drawer.open=!drawer.open};topAppBar.listen("MDCTopAppBar:nav",function(){drawer.open=!drawer.open})})();