import {numberRamdom} from "./ahorcado.js";

const numeros = ["0","1","2","3","4","5","6","7","8","9"];


const bienvenida = ()=> console.log(`
        ADIVINA LA CLAVE
En este juego deberas acertar la clave
     de 5 digitos numericos.
         BUENA SUERTE!!!`);

const crearClave = ()=>{
    let clave=""
    for (let i=0; clave.length < 5; i++) {
        let numero=numeros[numberRamdom(numeros)] 
        if (!clave.includes(numero)) {
            clave+=numero
        }
    }
    return clave
}

const validarIngreso = clave =>{
    for (let i = 0; i < clave.length; i++){
       if(!numeros.includes(clave[i])) return true      
    }
}


const comprobarClave= (humano,secreta)=>{
    let posicion = 0;
    let acierto = 0;
    for (let i = 0; i < secreta.length; i++) {
        if(secreta[i]==humano[i]){
            posicion++
        }
        if(secreta.includes(humano[i]) && secreta[i]!=humano[i]){
            acierto++
        }
    }
    return console.log(`
    tienes "${posicion}" posiciones correctas 
    y de los numeros restantes,
    tienes "${acierto}" numeros correctos pero en posiciones incorrectas.`)
}

export const adivinaClave = ()=>{
    let intento = 0;
    bienvenida();
    alert("Enter para continuar...")
    console.clear()
    let secreta=crearClave();
    console.log(secreta);
    let humano="";
    while(humano!=secreta){
        humano=prompt("Trata de descubrir la clave de 5 numeros. Recuerda que los 5 numeros son diferentes entre si.")
        if(humano.length!=5){
            console.log("recuerda que la clave tienen que ser 5 numeros.");
        }else if(validarIngreso(humano)){
            console.log("La clave ingresada posee caracteres que no son numeros.");
        }else{
            intento++
            console.log(`tu clave ingresada es ${humano}`);
            comprobarClave(humano,secreta)
        }
    }
    console.log(`felicitaciones haz ganado. la clave era ${secreta} 
y la cantidad de intentos que precisaste para descubrirla fueron ${intento}`);
alert("Enter para continuar...")
}