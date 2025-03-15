/*VARIÁVEIS*/
const img = document.getElementById('gta_sa_map_finder')
const info = document.getElementById('info')
const res = document.getElementById('res')
const search = document.getElementById('search')

const link = document.getElementById('link')


/*FUNÇÃO PARA QUANDO ENTRAR NO MAPA, APARECER O INFO*/
function entrar(){
    img.addEventListener("mouseenter", function(){
        info.style.display = "block"
    })
}

/* FUNÇÃO PARA QUANDO SAIR DO MAPA, APAGAR O INFO*/
function sair(){
    img.addEventListener("mouseout", function(){
        info.style.display = 'none'
    })
    
}

function SelectCoords(){

    /*FUNÇÃO PARA MOSTRAR AS COORDENADAS DO MAPA*/
    img.addEventListener('mousemove', (event)=>{
        const coords = img.getBoundingClientRect()

        const x = event.pageX
        const y = event.pageY

        var coordsX = Math.ceil((x - coords.width/2) - coords.left) * 12

        var coordsY = Math.floor((coords.height/2 - y) -coords.top) * 12


        var margin = 30
        console.log(`X:${x},Width:${window.innerWidth} = ${window.innerWidth - x}`)

        var larguraInfo = info.offsetWidth + margin
        if (window.innerWidth - x <= larguraInfo){

            info.style.left = `${x- larguraInfo}px`
            info.style.top = `${y+margin}px`
            info.innerHTML = `X:${coordsX}<br>Y:${coordsY}`

        }
        else{
            info.style.left = `${x+margin}px`
            info.style.top = `${y+margin}px`
            info.innerHTML = `X:${coordsX}<br>Y:${coordsY}`
        }
        
    })

    /*FUNÇÃO PARA ATUALIZAR O ENDEREÇO DO LINK NO INPUT*/
    img.addEventListener("click", (event)=>{
        const coords = img.getBoundingClientRect()

        const x = event.pageX
        const y = event.pageY

        var coordsX = Math.ceil((x - coords.width/2) - coords.left) * 12

        var coordsY = Math.floor((coords.height/2 - y) -coords.top) * 12

        res.innerHTML = `X:${coordsX}  Y:${coordsY}`

        link.value = `https://dev.prineside.com/en/gtasa_samp_model_id/mapsearch/?x=${coordsX}&y=${coordsY}`

        navigator.clipboard.writeText(link.value)
    })

}

/*FUNÇÃO ABRIR O SITE EM UMA NOVA GUIA*/

search.addEventListener('click', (event)=>{
    function Pesquisar(){

        if (link.value.length == 0){
            alert("Por favor, clique no mapa para inserir as coordenadas")
        }else{
            
            alert("Carregue e aperte CTRL + S no site")

            window.open(link.value, "_target")


        }
    }
    Pesquisar()
})


abrirHTML()


/*CHAMADAS DE FUNÇÕES*/
SelectCoords()
entrar()
sair()

