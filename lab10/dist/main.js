(()=>{var e={318:e=>{e.exports={kmsToMiles:e=>.62137*e,milesToKms:e=>1.60934*e}},7:e=>{e.exports={celsiusToOthers:e=>({fahrenheit:9*e/5+32,kelvin:e+273.15}),fahrenheitToOthers:e=>({celsius:5*(e-32)/9,kelvin:5*(e-32)/9+273.15}),kelvinToOthers:e=>({celsius:e-273.15,fahrenheit:9*(e-273.15)/5+32})}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}(()=>{const{kelvinToOthers:e,celsiusToOthers:t,fahrenheitToOthers:i}=n(7),{kmsToMiles:s,milesToKms:l}=n(318);document.getElementById("submit-celsius").addEventListener("click",(()=>{const e=t(document.getElementById("celsius").value);document.getElementById("celsius-to-fahrenheit").innerText=`${e.fahrenheit}`,document.getElementById("celsius-to-kelvin").innerText=`${e.kelvin}`})),document.getElementById("submit-fahrenheit").addEventListener("click",(()=>{const e=i(document.getElementById("fahrenheit").value);document.getElementById("fahrenheit-to-celsius").innerText=`${e.celsius}`,document.getElementById("fahrenheit-to-kelvin").innerText=`${e.kelvin}`})),document.getElementById("submit-kelvin").addEventListener("click",(()=>{const t=e(document.getElementById("kelvin").value);document.getElementById("kelvin-to-celsius").innerText=`${t.celsius}`,document.getElementById("kelvin-to-fahrenheit").innerText=`${t.fahrenheit}`})),document.getElementById("submit-kms").addEventListener("click",(()=>{const e=s(document.getElementById("kms").value);document.getElementById("kms-to-miles").innerText=e})),document.getElementById("submit-miles").addEventListener("click",(()=>{const e=l(document.getElementById("miles").value);document.getElementById("miles-to-kms").innerText=e}))})()})();