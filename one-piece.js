const botonRecompensa = document.querySelector("#boton-recompensa")
botonRecompensa.addEventListener("click", recompensa1)

function recompensa1(){
    const p1 = document.querySelector("#r1")
    const p2 = document.querySelector("#r2")

    if(botonRecompensa){
        p1.innerHTML = "$" + 200000000 + " BERRYS"
        p2.innerHTML = "$" + 100000000 + " BERRYS"
    }
}

const botonRecompensa2 = document.querySelector("#boton-recompensa2")
botonRecompensa2.addEventListener("click", recompensa2)

function recompensa2(){
    const p3 = document.querySelector("#r3")
    const p4 = document.querySelector("#r4")

    if(botonRecompensa2){
        p3.innerHTML = "$" + 83000000 + " BERRYS"
        p4.innerHTML = "$" + 100000000 + " BERRYS"
    }
}