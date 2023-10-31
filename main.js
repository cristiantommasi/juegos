import {ahorcado} from "./ahorcado.js"
import {tateti} from "./tateti.js"
import {piedraPapelTijeras} from "./PIEDRA_PAPEL_TIJERA.js"
import {adivinaClave} from "./adivinaClave.js";

const menu = () =>{
console.log(`:::::: Selecciona el juego que deseas ::::::

        1. Ahorcado.
        2. Piedra, Papel o Tijeras.
        3. Ta Te Ti.
        4. Adivina la clave.
        5. Salir`);
}

const main = ()=>{
    let jugar = true;
    alert("bienvenido.")
    while (jugar){
        let termina = true
        menu()
        while(termina){
            let election = prompt('Elige el juego al cual deseas ingresar.')

        switch (election) {
        case "1":
            console.clear()
            ahorcado()
            termina=false
            continue;
        case "2":
            console.clear()
            piedraPapelTijeras()
            termina=false
            continue;
        case "3":
            console.clear()
            tateti()
            termina=false
            continue;
        case "4":
            console.clear()
            adivinaClave()
            termina=false
            continue;
        case "5":
            termina=false;
            //seguir=false;
            jugar=false;
            continue;
        default:
            console.log("La opcion ingresada es invalida.");
        }
    }
}
}

main()

console.log("gracias por tu visita!!!");
