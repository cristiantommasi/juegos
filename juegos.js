const menu = () =>{
console.log(`:::::: Selecciona el juego que deseas ::::::

        1. Ahorcado.
        2. Piedra, Papel o Tijeras.
        3. Ta Te Ti.
        4. Adivina el numero.`);
}
//las funciones estan asi a modo de ejemplo o maqueta de menu.
const findNumber = a =>{
    console.log("Encontra el numero.");
}

const ahorcado = a =>{
    console.log("Bienvenido al juego del Ahorcado.");
}

const taTeTi = a =>{
    console.log("Este es el Juego del TA-TE-TI.");
}

const stonePaperSissors = a =>{
    console.log("Juega a piedra, Papel y Tijeras.");
}


let jugar = true;
while (jugar){
console.clear()
let seguir = true;
menu()
let election = prompt('Elige el juego al cual deseas ingresar.')

//este bloque se podria mejorar.
switch (election) {
    case "1":
        ahorcado()
        break;
    case "2":
        stonePaperSissors()
        break;
    case "3":
        taTeTi()
        break;
    case "4":
        findNumber()
        break;
    default:
        console.log("La opcion ingresada es invalida.");
        break;
}

while(seguir){
    console.log("¿deseas seguir jugando?");
    let choice = prompt("SI, para continuar. NO, para abandonar y salir.");
    if(choice.toUpperCase() === "SI"){
        seguir = false
        continue;
    }else if(choice.toUpperCase()==="NO"){
        jugar=false;
        break;
    }else{
        console.log("No ingresaste una opcion valida.");
    }
}
}

console.log("gracias por tu visita!!!");
