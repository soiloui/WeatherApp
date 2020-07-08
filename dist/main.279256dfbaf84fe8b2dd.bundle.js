!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiKey="2c9f5c71e1bc4a307df3c07a6ea03ecf",this.uri="https://api.openweathermap.org/data/2.5/forecast?appid=".concat(this.apiKey,"&units=metric")}var t,n,o;return t=e,(n=[{key:"fetchWeather",value:function(e){fetch(this.uri+e).then((function(e){return e.json()})).then((function(e){document.querySelector(".weather__degree").innerHTML="".concat(e.list[0].main.temp,"<span> C</span>"),document.querySelector(".weather__location-name").innerHTML=e.city.name,document.querySelector(".weather__icon").src="https://openweathermap.org/img/wn/".concat(e.list[0].weather[0].icon,"@4x.png"),document.querySelector(".weather__description").innerHTML="".concat(e.list[0].weather[0].description);var t=document.querySelector(".weather-forecast-container");t.innerHTML="";var n=document.createDocumentFragment();e.list.map((function(e,t){if(t>0&t<15){var r=document.createElement("section");r.classList.add("weather-forecast");var o="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@4x.png"),a=document.createElement("img");a.classList.add("weather__icon"),a.src=o;var c=document.createElement("p");c.classList.add("weather__degree"),c.innerHTML="".concat(parseFloat(e.main.temp).toFixed(1),"<span>C</span>");var i=document.createElement("p");i.classList.add("weather__hour"),i.innerHTML="".concat(e.dt_txt.substring(10,e.dt_txt.length-3));var u=document.createElement("p");u.classList.add("weather__description"),u.innerHTML=e.weather[0].main,r.appendChild(c),r.appendChild(a),r.appendChild(i),r.appendChild(u),n.appendChild(r)}})),t.appendChild(n),console.log(e)}))}}])&&r(t.prototype,n),o&&r(t,o),e}());window.addEventListener("load",(function(){var e,t;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){e=n.coords.longitude,t=n.coords.latitude;var r="&lat=".concat(t,"&lon=").concat(e);o.fetchWeather(r)})):console.log("Geolocation turned off")}));var a=document.querySelector(".search-form"),c=document.querySelector(".search-form__city");a.addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=parseInt(((new Date).getTime()/1e3/60/60).toFixed(0))+2;console.log(t);o.fetchWeather("&q=".concat(e))}(c.value)}));var i=document.querySelector(".settings"),u=document.querySelector(".settings-icon");u.addEventListener("click",(function(){i.classList.toggle("settings--active"),u.classList.toggle("settings-icon--active")}))},function(e,t,n){}]);