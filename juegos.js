import {ahorcado} from "./ahorcado.js"

const menu = () =>{
console.log(`:::::: Selecciona el juego que deseas ::::::

        1. Ahorcado.
        2. Piedra, Papel o Tijeras.
        3. Ta Te Ti.
        4. Adivina el numero.`);
}

let jugar = true;
while (jugar){
console.clear()
let seguir = true;
menu()
let election = prompt('Elige el juego al cual deseas ingresar.')


//este bloque se podria mejorar. se podria cambiar por un ternario anidado.
//este bloque se podria mejorar. habria que optimizarlo. no me parece buena idea el (switch-case).
switch (election) {
    case "1":
        ahorcado()
        break;
    case "2":
        stonePaperSissors()
        break;
    case "3":
        tateti()
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
