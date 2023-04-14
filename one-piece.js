const botonUsopp = document.querySelector("#boton-usopp")
botonUsopp.addEventListener("click", usopp)

function usopp(){
    const p1 = document.querySelector("#r1")
    const p2 = document.querySelector("#r2")

    if(botonUsopp){
        p1.innerHTML = 500000
        p2.innerHTML = 30000
        return
    }
}