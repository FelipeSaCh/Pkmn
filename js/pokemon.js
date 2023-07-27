//ACTIVACION BOTONES
// var opcion1 = document.getElementById("blastoise");
// var opcion2 = document.getElementById("charizard");
// var opcion3 = document.getElementById("venasaur");
// var boton1 = document.getElementById("seleccionar_fuego");
// var boton2 = document.getElementById("seleccionar_agua");
// var boton3 = document.getElementById("seleccionar_planta");
// var confirm=document.getElementById("seleccionar_pkmn");
// confirm.addEventListener("click",function(){
//     if (blastoise.checked || charizard.checked || venasaur.checked) {
//         seleccionar_fuego.disabled = false;
//         seleccionar_agua.disabled = false;
//         seleccionar_planta.disabled = false;
//       }
    
// })


let ataquejugador 
let ataquePc
let vUsu=3 
let vPc =3

// let lucha =document.getElementById('seleccionar_pkmn'),caja=document.getElementById('caja'),contador=0;
// function cambio(){
//     if (contador=0){
//         caja.classList.add('rotar');contador=1;
//     }
//     else{caja.classList.remove('rotar');contador=0}
// }
// btn.addEventListener('click',cambio,true)
function cargaJuego(){
    let ocultarAtaque = document.getElementById('Ataque')
    ocultarAtaque.style.display='none'
    let ataquePconMascotaJugador = document.getElementById('seleccionar_pkmn') 
    ataquePconMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let btnFuego = document.getElementById('seleccionar_fuego')
    btnFuego.addEventListener('click',ataqueFuego)
    let btnAgua= document.getElementById('seleccionar_agua')
    btnAgua.addEventListener('click' , ataqueAgua)
    let btnPlanta= document.getElementById('seleccionar_planta')
    btnPlanta.addEventListener('click' , ataquePlanta)
    
    let btnReiniciar= document.getElementById('Reiniciar')
    btnReiniciar.addEventListener('click', ReiniciarJuego)

}

function seleccionarMascotaJugador() {
    
    let inputBlastoise = document.getElementById('blastoise')
    let inputCharizard = document.getElementById('charizard')
    let inputVenasaur = document.getElementById('venasaur')
    let spanPokemon = document.getElementById('nomPokemon')

    if (inputBlastoise.checked){
        spanPokemon.innerHTML='Blastoise'
    } else if (inputCharizard.checked){
        spanPokemon.innerHTML='Charizard'
    } else if (inputVenasaur.checked){
        spanPokemon.innerHTML='Vensaur'
    } else {
        alert('selecciona un pokemon antes de atacar')
        ReiniciarJuego()
    }
 
    seleccionarMascotaPc()
}

function seleccionarMascotaPc() {
    let ocultarAtaque = document.getElementById('Ataque')
    ocultarAtaque.style.display='block'
    let spanPokemonPc= document.getElementById('nomPokemonEne')
    let rand = random(3,1)
    if (rand == 1) {
        spanPokemonPc.innerHTML='Blastoise'
    }else if (rand == 2) {
        spanPokemonPc.innerHTML='Charizard'
    }else {
        spanPokemonPc.innerHTML='Venasaur'
    }

}

function random(max, min){
    //Funcion para numero aleatorio
            return Math.floor(Math.random()*(max-min+1)+min)
        }


function ataqueFuego() {
    ataquejugador='FUEGO'
    ataqueApc()
}

function ataqueAgua() {
    ataquejugador='AGUA'
    ataqueApc()
}  
     
function ataquePlanta() {
    ataquejugador='PLANTA'
    ataqueApc()
}

function ataqueApc() {
    let ataqueRnd
    ataqueRnd = random(3,1)
    if (ataqueRnd==1) {
        ataquePc='FUEGO'
    }else if (ataqueRnd == 2) {
        ataquePc ='AGUA'
    }else {
        ataquePc ='PLANTA'
    }
    desarrollo()
}



function desarrollo(){
    let spanVidasJugador = document.getElementById('vidasusu')
    let spanVidasPc=document.getElementById('vidaspc')
    if(ataquePc==ataquejugador){
        actmensaje("EMPATE")
    }else if(ataquejugador=='FUEGO' && ataquePc=='PLANTA'){
        actmensaje("GANASTE")
        vPc--
        spanVidasPc.innerHTML=vPc
    }else if(ataquejugador=='AGUA' && ataquePc=='FUEGO'){
        actmensaje("GANASTE")
        vPc--
        spanVidasPc.innerHTML=vPc
    }else if(ataquejugador=='PLANTA' && ataquePc=='AGUA'){
        actmensaje("GANASTE")
        vPc--
        spanVidasPc.innerHTML=vPc
    }else{
        actmensaje("PERDISTE")
        vUsu--
        spanVidasJugador.innerHTML=vUsu
        
    }
    revision()

}
function revision(){
    if (vPc==0){
        mensaje.innerHTML="¡VICTORIA (JUGADOR 1)¡"
        
    }
    else if(vUsu==0){
        mensaje.innerHTML="¡VICTORIA (JUGADOR 2)!"
    }
    if (vPc==0 || vUsu==0){
        let btnFuego = document.getElementById('seleccionar_fuego')
        btnFuego.disabled=true
        let btnAgua= document.getElementById('seleccionar_agua')
        btnAgua.disabled=true
        let btnPlanta= document.getElementById('seleccionar_planta')
        btnPlanta.disabled=true

    }
    
    
}

let mensaje=document.createElement('p')

function actmensaje(resultado){
    let sectionMensaje=document.getElementById('mensajes')
    mensaje.innerHTML="Tu pokemon ataco con " + ataquejugador + ', El enemigo ataco con ' + ataquePc + ' Resultado: '+ resultado+""
    sectionMensaje.appendChild(mensaje)
}
function ReiniciarJuego(){
    location.reload()
}

window.addEventListener('load', cargaJuego)