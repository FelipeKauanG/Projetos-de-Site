/*
    Variáveis iniciais
*/

var background = document.querySelector("body")
var resHoras = document.querySelector("#horas")
var help = document.getElementById("help")
var info = document.getElementById("info")
var resClima = document.querySelector("#resClima")


//Id para exportar informações
var innerCountry = document.getElementById("country")
var innerWindSpeed = document.getElementById("windSpeed")
var innerRain =  document.getElementById("rain")
var innerHumidty = document.getElementById("humidity")
var innerTemperature = document.getElementById("temperature")

/*
    Mudando o background
*/

setInterval(function(){
    var horas = window.decodeURIComponent(new Date()).split(" ")[4]
    resHoras.innerHTML = horas

    
    var hora = decodeURIComponent(new Date()).split(" ")[4].split(":")[0]
    
    
    switch(hora %24){
        case 0:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,22,28,1) 100%)"

            break

            case 1:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,22,28,1) 100%)"
            break
            case 2:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,22,28,1) 100%)"
            break
            case 3:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,35,45,1) 100%)"
            break
            case 4:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,40,50,1) 100%)"
            break
            case 5:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,9,18,1) 0%, rgba(0,41,74,1) 100%)"
            break
            case 6:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(1,30,59,1) 0%, rgba(0,90,163,1) 100%)"
            break
            case 7:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,51,102,1) 0%, rgba(0,150,198,1) 100%)"
            break
            case 8:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,68,153,1) 0%, rgba(0,183,255,1) 100%)"
            break
            case 9:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 10:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 11:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 12:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 13:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 14:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 15:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 16:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,89,153,1) 0%, rgba(0,218,255,1) 100%)"
            break
            case 17:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(220, 140, 90,1) 0%, rgba(0,181,242,1) 60%, rgba(0,173,255,1) 100%)"
            break
            case 18:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(255,160,0,1) 0%, rgba(0,112,242,1) 59%, rgba(0,165,255,1) 100%)"
            break
            case 19:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(158,60,68,1) 0%, rgba(0,14,97,1) 39%, rgba(0,40,148,1) 100%)"
            break
            case 20:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,40,50,1) 100%)"
            break
            case 21:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,40,50,1) 100%)"
            break
            case 22:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,22,28,1) 100%)"
            break
            break
            case 23:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,22,28,1) 100%)"
            break

            default:
            background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,40,50,1) 100%)"
            break
            }
            
        },1000)


/*
    Validando dados
*/


var histCityName = document.getElementById("cityname")
var cityText = document.getElementById("city")
var cityButton = document.getElementById("sendcity")
var apiButton = document.getElementById("API")


if (document.cookie == ""){
    document.cookie = "city="
    document.cookie = "api="
}else{

    function lembrarAPI(){
        var cookie1 = (decodeURIComponent(document.cookie)).split(";")[0]
    var cookie2 = (decodeURIComponent(document.cookie)).split(";")[1]

    if (cookie1.split("=")[0] == "api"){
        apiButton.value = `${cookie1.split("=")[1]}`
    }else{
        apiButton.value = `${cookie2.split("=")[1]}`
    }
    }
    function lembrarCidade(){
        var cookie1 = (decodeURIComponent(document.cookie)).split(";")[0]
        var cookie2 = (decodeURIComponent(document.cookie)).split(";")[1]

        if(cookie1.split("=")[0] == "city"){
            cityText.value = cookie1.split("=")[1]
        }else{
            cityText.value = cookie2.split("=")[1]
        }
    }


    lembrarCidade()
    lembrarAPI()
}

function drawIconsWeather(country, windSpeed, rain, humidty, temperature, flag){

    function getCountry(){
        innerCountry.innerHTML = `${country}, ${flag}`
    }
    
    function getwindSpeed(){

        innerWindSpeed.innerHTML = `Velocidade do vento: ${windSpeed}Km/h`
    }

    function getRain(){
        innerRain.innerHTML = `${rain}`
    }

    function getHumidty(){
        innerHumidty.innerHTML = `Humidade: ${humidty}%`
    }

    function getTemperature(){
        innerTemperature.innerHTML = `Temperatura: ${temperature}°C`
    }


    getTemperature()
    getHumidty()
    getRain()
    getwindSpeed()
    getCountry()



}



function partCity(){
    function sendCity(){
        
        if(apiButton.value == ""){
            alert("Por favor insira o valor da API, clique em [?] para mais informções")
        }
        else if(cityText.value == ""){
            alert("Por gentileza, insire o nome da cidade")
        }
        else{
            document.cookie = `city=${cityText.value}`

            var urlWeather =`https://api.openweathermap.org/data/2.5/weather?q=${String(cityText.value).trim().replaceAll(" ", "+")}&appid=${apiButton.value}&units=metric&lang=pt_br`
            fetch(urlWeather).then(response=>{
                if(response.status == "404"){
                    alert("Erro, localidade não encontrada")
                }else{
                response.json().then(data=>{

                    var country = data.name
                    var windSpeed = data.wind.speed
                    var rain = data.weather[0].description
                    var humidity = data.main.humidity
                    var temperature = data.main.temp
                    var flag = data.sys.country
                    drawIconsWeather(country, windSpeed, rain, humidity, temperature, flag)
                })
            }
                
            })
        }
    }

    cityButton.addEventListener("click", function(){
        sendCity()
    })
    
    cityText.addEventListener("keypress", (event)=>{
        if(apiButton.value == ""){
            alert('Insira o valor da API, clique em [?] para mais informações ')
        }
        else if(event.key == "Enter"){
            sendCity()
        }
    })
}

function partAPI(){
    apiButton.addEventListener("change", function(){
        document.cookie = `api=${String(apiButton.value).replace(" ", "").replace(" ", "")}`
    })
}


partCity()
partAPI()
