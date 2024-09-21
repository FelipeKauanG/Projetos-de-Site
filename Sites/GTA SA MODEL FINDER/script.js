var img = document.getElementById('gta_sa_map_finder')
var info = document.getElementById('info')
 

//xpath = /html/body/div[6]/div/div[8]/div

function entrar(){
    img.addEventListener("mouseenter", function(){
        info.style.display = "block"
    })
}

function sair(){
    img.addEventListener("mouseout", function(){
        info.style.display = 'none'
    })
    
}

function SelectCoords(){

    function mover(){

        img.addEventListener('mousemove', (event)=>{
            const coords = img.getBoundingClientRect()

            var x = event.pageX
            var y = event.pageY


            var coordX = x - coords.left
            var coordY = (coords.bottom - y) - coords.bottom % 1
            
            
            
            info.innerHTML = `X:${coordX}<br>Y:${coordY}`

            console.log(coords)

    
        })
    }
 
    mover()

}

SelectCoords()
entrar()
sair()
