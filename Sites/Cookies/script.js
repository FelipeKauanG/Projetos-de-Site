var res = document.getElementById("res")
let nameButton = document.getElementById("nameButton")
let nameValue = document.getElementById("nameValue")
var horas = document.querySelector("#horas")


if (document.cookie == ""){
    document.cookie = `nome=`
}

function ChangeCookie(){
    if (nameValue.value == ""){
        alert("digite o seu nome primeiro!")
    }else{
        document.cookie = `nome=${nameValue.value}`
        res.innerHTML = `Seja bem vindo(a) ${nameValue.value}`
        
    }
}


nameButton.addEventListener("click", function(){
    ChangeCookie()
})


nameValue.addEventListener("keypress", (event) =>{
    if(event.code == "Enter"){
        ChangeCookie()
    }
})




cNome = window.decodeURIComponent(document.
cookie.split("=")[1])

res.innerHTML = ""
if (cNome != ""){
    res.innerHTML = `Seja bem vindo(a) ${cNome}`
}else{
    
    res.innerHTML = `Digite seu nome abaixo`
}


setInterval(function(){
    const day = new Date()
    day.getTimezoneOffset()
    let text = day.toUTCString()
    var tempo = text.split(" ")[4]
    horas.innerHTML = `${tempo}`
    console.log(day)
}, 1000)



