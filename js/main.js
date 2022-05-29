// Creando Funciones --<<<<<<
// Funcion para Recargar página
const reinicio = () => {
window.location.reload();
  cambioPantalla(1);
}
// Función para cambiar de pantalla --<<<<<
const cambioPantalla = (cambio) => {

    let seleccionPantalla = "pantalla" + cambio;
    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"];

//Para quitar la pantalla seleccionada del array
    arrayPantallas = arrayPantallas.filter(e => !seleccionPantalla.includes(e));
//Block a la seleccionada y none al resto
    document.getElementById(seleccionPantalla).style.display = "block";
    for(let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }
}

// Función random --<<<<<<<

const aleatorio = {
    random(min, max){  
        return Math.floor(Math.random() * (max - min) + min);
    }
}
//Función elección Barco
let eleccion1 = (nBoat) => {
    if(seleccion1 == ""){
        seleccion1 = allBoats[nBoat];
        let primerBoat = document.getElementById(nBoat);
        let dataBoats = document.getElementById("data" + 1);
        primerBoat.onclick = "";
        //Bloqueamos el barco
        primerBoat.classList.add("seleccionado");
        dataBoats.innerHTML = `${seleccion1.name}`;

    }else if(seleccion2 == ""){
        seleccion2 = allBoats[nBoat];
        let primerBoat = document.getElementById(nBoat);
        let dataBoats = document.getElementById("data" + 2);
        primerBoat.onclick = "";
        //Bloqueamos el otro barco
        primerBoat.classList.add("seleccionado");
        dataBoats.innerHTML = `${seleccion2.name}`;        

        setTimeout(() => {
            cambioPantalla(3);
            faseCarrera();
        }, 2500);
    }
}
// Para la seleccion de barco
const faseCarrera= () => {
    img1.innerHTML = `<img class="iBoat1" src="img/${seleccion1.name}.png" alt="boat1" >`;
    img2.innerHTML = `<img class="iBoat2" src="img/${seleccion2.name}.png" alt="boat2" >`;
}

// Funcion para la fase carrera 

const carrera= () => {

    seleccion1.correr();
    seleccion2.correr();
    
    if(seleccion1.velocidad >= 65) {  

        cambioPantalla(4);
        
        winner.innerHTML = `The winner is the Player with ${seleccion1.name}`;
    } 
    if(seleccion2.velocidad >= 65) {

        cambioPantalla(4);

        winner.innerHTML = `The winner is the CPU with ${seleccion2.name}`;
    }

    document.getElementById("sBoat1").style.marginLeft = `${seleccion1.velocidad}` + "em";
    document.getElementById("sBoat2").style.marginLeft = `${seleccion2.velocidad}` + "em";
}
// Creando clase Barco --<<<<<<

class boat {

    constructor(name, id, motor, velocidad, luck) {
        this.name = name;
        this.id = id;
        this.motor = "4t";
        this.velocidad = 0;
        this.luck = aleatorio.random(1,15);
    }

    correr() {
       
        this.velocidad += this.luck;
        this.luck=aleatorio.random(1,15);
    }
};

// Instanciamos los Barcos --<<<<<<

let boat1 = new boat ("RED FLAG", "1", "4t", 0, 1);
let boat2 = new boat ("BLUE PEARL", "2", "4t", 0, 1);


//Diccionario --<<<<<

let allBoats = {
    1 : boat1,
    2 : boat2
}

//Seleccion de Barco vacío

let seleccion1 = "";

let seleccion2 = "";


// Variable para barcos elegidos en screen 3 y winner

let img1 = document.getElementById("imgBoat1");
let img2 = document.getElementById("imgBoat2");

let winner = document.getElementById("winner");