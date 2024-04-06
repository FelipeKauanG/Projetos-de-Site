var nameValue = document.getElementById("nameValue")
var res = document.getElementById("res")
let nameButton = document.getElementById("nameButton")


nameValue = nameValue.value

if (document.cookie == ""){ // Setup do Cookie
    document.cookie = "name=usuario"
    document.cookie = "visitas=0"
}
res.innerHTML = "Por favor, digite seu nome abaixo"

nameButton.addEventListener("click", function(){
    nameValue = nameValue.value

})

var nome = window.decodeURIComponent(document.cookie.split(";")[0].split("=")[1])

var visitas = window.decodeURI(document.cookie.split(";")[1].split("=")[1])

visitas = parseInt(visitas)

console.log(document.cookie)

console.log(`nome de usuario ${nome}`)
console.log(`Numero de visitas ${visitas}`)

if(visitas == 0){
    document.cookie = "name=usuario"
    document.cookie = "visitas=1"
    
}else if(visitas > 0){
    document.cookie = `usuario=usuario`
    document.cookie = `visitas=${visitas+1}`
    res.innerHTML = `Seja bem vindo #`
}

