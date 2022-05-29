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
        let dataBoat = document.getElementById("data" + 1);
        primerBoat.onclick = "";
        //Bloqueamos el otro barco
        primerBoat.classList.add("seleccionado");
        dataBoat.innerHTML = `${seleccion1.name}`;
        
        
    } else if( team2 == ""){
        seleccion1 = allBoats[nBoat];
        let primerBoat = document.getElementById(nBoat);
        let dataBoat = document.getElementById("data" + 2);
        primerBoat.onclick = "";
        //Bloqueamos el otro barco
        primerBoat.classList.add("seleccionado");
        dataBoat.innerHTML = `${seleccion2.name}`;        

        setTimeout(() => {
            changeScreen(3);
            displayGame();
        }, 2500);
    }
}

// Creando clase Barco --<<<<<<

class boat {

    constructor(name, id, motor, velocidad, luck) {
        this.name = name;
        this.id = id;
        this.motor = "4t";
        this.velocidad = 0;
        this.luck = functions.random(1,20);
    }

    correr() {
       
        this.velocidad += this.luck;

        this.luck=functions.random(1,20);
    
    }
};

// Instanciamos los Barcos --<<<<<<

let boat1 = new boat ("Red", "1", "4t", 0, 1);
let boat2 = new boat ("Blue", "2", "4t", 0, 1);


//Diccionario --<<<<<

let allBoats = {
    1 : boat1,
    2 : boat2
}

//Seleccion de Barco vacío

let seleccion1 = "";

let seleccion2 = "";