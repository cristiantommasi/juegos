let eleccionUsuario= prompt("elije: piedra, Papel o tijera");
let Opciones= ["piedra", "papel", "tijera"];

function jugar(eleccionUsuario) {
    // definir las opciones disponibles mediante un arreglo
    let Opciones= ["piedra", "papel", "tijera"];
    //genera la eleccion aleatoria de la PC
    let eleccionPC=Opciones[round(Math()*2)];
    // Se verifica el resultado del juego con condicional
    if (eleccionUsuario=eleccionPC) {
        console.log ("Empate Ambos eligieron" + eleccionUsuario);

    } else if ((eleccionUsuario=Opciones[0]) && (eleccionPC=Opciones=[2])||
               (eleccionUsuario=Opciones[1]) && (eleccionPC=Opciones[0])||
               (eleccionUsuario=Opciones[2]) && (eleccionPC=Opciones[1])
    ) {
            // usuario gana
            console.log ("Ganaste. Elegiste:" + eleccionUsuario + "y la PC eligio:" + eleccionPC);
    } else { 
           // usuario pierde
           console.log ("Perdiste. Elegiste" + eleccionUsuario + "y la PC eligio" + eleccionPC + ",");
        } 
   
    }

//interaccion con el usuario
if ((eleccionUsuario=Opciones[0])||(eleccionUsuario = Opciones[1])||(eleccionUsuario=Opciones[2])) {
    jugar(eleccionUsuario);
    
} else {
    console.log ("eleccion invalida. Por favor, elegir piedra, papel o tijera");
}
//revisar interaccion con el  usuario