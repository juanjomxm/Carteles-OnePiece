//                                   EVENTO PARA IMAGEN

const imagenLuffy = document.querySelector("#imagen-luffy")
imagenLuffy.addEventListener("click", imagenDeLuffy)

function imagenDeLuffy(){
    const wanted1 = document.querySelector("#wanted1")
    const p10 = document.querySelector("#r1")

    if(imagenLuffy){
        wanted1.innerHTML = "CAPITAN"
        p10.innerHTML = "$" + 1500000000 + " BERRYS"

    }
}

const imagenZoro = document.querySelector("#imagen-zoro")
imagenZoro.addEventListener("click", imagenVice)

function imagenVice(){
    const wanted = document.querySelector("#wanted")
    const p1 = document.querySelector("#r")

    if(imagenVice){
        wanted.innerHTML = "VICECAPITAN"
        p1.innerHTML = "$" + 300000000 + " BERRYS"
        return
    }

}

const imagenSanji = document.querySelector("#imagen-sanji")
imagenSanji.addEventListener("click", imagenCocinero)

function imagenCocinero(){
    const wanted2 = document.querySelector("#wanted2")
    const p2 = document.querySelector("#r2")

    if(imagenSanji){
        wanted2.innerHTML = "SEGUNDO VICECAPITAN"
        p2.innerHTML = "$" + 230000000 + " BERRYS"
    }
}

const imagenJinbe = document.querySelector("#imagen-jinbe")
imagenJinbe.addEventListener("click", imagenJinbe2)

function imagenJinbe2(){
    const wanted3 = document.querySelector("#wanted3")
    const p3 = document.querySelector("#r3")

    if(imagenJinbe){
        wanted3.innerHTML = "PRIMER HIJO DEL MAR"
        p3.innerHTML = "$" + 270000000 + " BERRYS"

    }
}

const imagenUsopp = document.querySelector("#imagen-usopp")
imagenUsopp.addEventListener("click", ImagenDeUsopp)

function ImagenDeUsopp(){
    const wanted4 = document.querySelector("#wanted4")
    const p4 = document.querySelector("#r4")

    if(imagenUsopp){
        wanted4.innerHTML = "TIRADOR"
        p4.innerHTML = "$" + 170000000 + " BERRYS"

    }
}

const imagenRobin = document.querySelector("#imagen-robin")
imagenRobin.addEventListener("click", imagenDeRobin)

function imagenDeRobin(){
    const wanted5 = document.querySelector("#wanted5")
    const p5 = document.querySelector("#r5")

    if(imagenRobin){
        wanted5.innerHTML = "ARQUEOLOGA"
        p5.innerHTML = "$" + 200000000 + " BERRYS"

    }
}

const imagenFranky = document.querySelector("#imagen-franky")
imagenFranky.addEventListener("click", imagenDeFranky)

function imagenDeFranky(){
    const wanted6 = document.querySelector("#wanted6")
    const p6 = document.querySelector("#r6")

    if(imagenFranky){
        wanted6.innerHTML = "CONSTRUCTOR"
        p6.innerHTML = "$" + 210000000 + " BERRYS"

    }
}

const imagenBrook = document.querySelector("#imagen-brook")
imagenBrook.addEventListener("click", imagenDeBrook)

function imagenDeBrook(){
    const wanted7 = document.querySelector("#wanted7")
    const p7 = document.querySelector("#r7")

    if(imagenBrook){
        wanted7.innerHTML = "MUSICO"
        p7.innerHTML = "$" + 200000000 + " BERRYS"

    }
}

const imagenNami = document.querySelector("#imagen-nami")
imagenNami.addEventListener("click", imagenDeNami)

function imagenDeNami(){
    const wanted8 = document.querySelector("#wanted8")
    const p8 = document.querySelector("#r8")

    if(imagenNami){
        wanted8.innerHTML = "NAVEGANTE"
        p8.innerHTML = "$" + 150000000 + " BERRYS"

    }
}

const imagenChopper = document.querySelector("#imagen-chopper")
imagenChopper.addEventListener("click", imagenDeChopper)

function imagenDeChopper(){
    const wanted9 = document.querySelector("#wanted9")
    const p9 = document.querySelector("#r9")

    if(imagenChopper){
        wanted9.innerHTML = "MEDICO"
        p9.innerHTML = "$" + 100000 + " BERRYS"

    }
}


//                                    EVENTO PARA BOTON

const botonLuffy = document.querySelector("#boton-luffy")
botonLuffy.addEventListener("click", historiaLuffy)

function historiaLuffy(){
    const pHistoriaLuffy = document.querySelector("#historia-luffy")

    if(botonLuffy){
        pHistoriaLuffy.innerHTML = 
        `Luffy:
         Nació en la Villa Foosha. Seis años después de su nacimiento, 
         se encontró con una banda de piratas liderados por un capitán 
         llamado Shanks el Pelirrojo. Luffy se hizo amigo de la banda de 
         piratas y desde ese momento, quería convertirse en un pirata también.
         Cuando cumplo los 17 años se hizo a la mar, donde con su tripulacion
         busca convertirse en el rey de los piratas
        `

    }
}

const botonZoro = document.querySelector("#boton-zoro")
botonZoro.addEventListener("click", historiaZoro)

function historiaZoro(){
    const pHistoriaZoro = document.querySelector("#historia-zoro")

    if(botonZoro){
        pHistoriaZoro.innerHTML = 
        `Zoro Roronoa: 
        También llamado "el cazador de piratas". 
        Es un espadachín experto en el Santōryū
        (estilo de tres espadas). Usa tres espadas, 
        llevando una en cada mano y otra en la boca.
        Es valiente, fuerte y siempre cumple su palabra, 
        aunque también bastante temperamental.
        Su sueño es llegar a ser el mejor espadachín del mundo.
        `
    }
}

const botonSanji = document.querySelector("#boton-sanji")
botonSanji.addEventListener("click", historiaSanji)

function historiaSanji(){
    const pHistoriaSanji = document.querySelector("#historia-sanji")

    if(botonSanji){
        pHistoriaSanji.innerHTML = 
        `Sanji:
         Nació en el North Blue en el seno de la familia Vinsmoke, 
         la familia reinante del Reino de Germa. 
         Él y sus tres hermanos nacieron el mismo día; 
         Sanji es el tercer hijo, siendo el tercer príncipe del reino. 
         Cuando su madre estaba todavía viva, Sanji le preparaba comida.
        `
    }
}

const botonJinbe = document.querySelector("#boton-jinbe")
botonJinbe.addEventListener("click", historiaJinbe)

function historiaJinbe(){
    const pHistoriaJinbe = document.querySelector("#historia-jinbe")

    if(botonJinbe){
        pHistoriaJinbe.innerHTML = 
        `Jinbe:
        Creció en el orfanato que se convirtió en el Distrito Gyojin, junto a Arlong, Macro, y Fisher Tiger. Entrenó en el Dojo de Karate Gyojin a temprana edad y 
        obtuvo un cinturón negro en Karate Gyojin en su infancia
        `
    }
}

const botonUsopp = document.querySelector("#boton-usopp")
botonUsopp.addEventListener("click", historiaUsopp)

function historiaUsopp(){
    const pHistoriaUsopp = document.querySelector("#historia-usopp")

    if(botonUsopp){
        pHistoriaUsopp.innerHTML = 
        `Usopp: 
        Es el hijo de Yasopp, un pirata que es parte de la tripulación de Shanks "el pelirrojo". 
        Yasopp dejó a Usopp y a su madre para volverse un pirata cuando Usopp era muy pequeño. 
        Lejos de sentirle rencor, Usopp admiraba a su padre por haber seguido su sueño. 
        Un día, su madre se enfermó gravemente y estaba muriendo
        `
    }
}

const botonRobin = document.querySelector("#boton-robin")
botonRobin.addEventListener("click", historiaRobin)

function historiaRobin(){
    const pHistoriaRobin = document.querySelector("#historia-robin")

    if(botonRobin){
        pHistoriaRobin.innerHTML =
        `Nico Robin:
        Es la séptima integrante de la tripulación de los Piratas de Sombrero de Paja, 
        teniendo el puesto de arqueóloga, y fue anteriormente la Vice-Presidenta de la 
        organización criminal Baroque Works. Comió una Fruta del Diablo del tipo Paramecia, 
        la Fruta Flor Flor, la cual le permite hacer florecer extremidades de su cuerpo en otras superficies. Es originaria del West Blue. Su sueño es conocer la verdadera historia del mundo investigando en los Poneglyphs
        `
    }
}

const botonFranky = document.querySelector("#boton-franky")
botonFranky.addEventListener("click", historiaFranky)

function historiaFranky(){
    const pHistoriaFranky = document.querySelector("#historia-franky")

    if(botonFranky){
        pHistoriaFranky.innerHTML =
        `Franky:
         Es un cíborg (mitad androide, mitad humano). 
         Fue el líder de la Franky Family, un grupo de desmanteladores de Water 7 
         que hacen a la vez el trabajo de cazadores de recompensas. 
         Es el octavo miembro de la tripulación de Luffy tomando el puesto de carpintero. 
         Franky nació en el South Blue.
        `
    }
}

const botonBrook = document.querySelector("#boton-brook")
botonBrook.addEventListener("click", historiaBrook)

function historiaBrook(){
    const pHistoriaBrook = document.querySelector("#historia-brook")

    if(botonBrook){
        pHistoriaBrook.innerHTML = 
        `Brook:
        Era el guardián de un antiguo reinado en West Blue, 
        razón por la cual también es un espadachín. 
        Sin embargo, por ahora es desconocido por qué dejó este reinado. 
        Brook se unió tiempo después a los piratas Rumbar, 
        lidereados por el capitán Yorki "el Calicó".
        `
    }
}

const botonNami = document.querySelector("#boton-nami")
botonNami.addEventListener("click", historiaNami)

function historiaNami(){
    const pHistoriaNami = document.querySelector("#historia-nami")

    if(botonNami){
        pHistoriaNami.innerHTML = 
        `Nami: 
        Fue la primera de su especie que abandonó el océano y 
        se aventuró en tierra firme, donde se enfrenta a todo tipo de criaturas y 
        situaciones inimaginables con valor, decisión y un intrépido coraje. 
        En los mares al oeste del Monte Targon, 
        habita la tribu vastaya conocida como los marai.
        `
    }
}

const botonChopper = document.querySelector("#boton-chopper")
botonChopper.addEventListener("click", historiaChopper)

function historiaChopper(){
    const pHistoriaChopper = document.querySelector("#historia-chopper")

    if(botonChopper){
        pHistoriaChopper.innerHTML = 
        `Chopper:
         Es un reno que siempre sufrió discriminación de parte de su manada, 
         ya que nació con una nariz azul que ningún miembro de la manada poseía. 
         Esta manada pertenecía al antiguo pueblo de Drum. Un día, 
         mientras toda la manada recolectaba frutas para comer, 
         Chopper encontró laHito Hito no Mi, una fruta del diablo.
        `

    }
}