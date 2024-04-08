var resHoras = document.querySelector("#horas")
var background = document.querySelector("body")
setInterval(function(){
    var horas = window.decodeURIComponent(new Date()).split(" ")[4]
    resHoras.innerHTML = horas
},1000)
