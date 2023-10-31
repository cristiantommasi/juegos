const PAISES= ["ARGENTINA", "BRASIL","CHILE","PARAGUAY","URUGUAY","ECUADOR","COLOMBIA","VENEZUELA","BOLIVIA",
"CANADA","MEXICO","NICARAGUA","CUBA","ESTADOS UNIDOS","PANAMA","PERU","HAITI","REPUBLICA DOMINICANA","EL SALVADOR","JAMAICA",
"ALEMANIA","FRANCIA","ESPAÑA","INGLATERRA","ETIOPIA","NIGERIA","CHINA","NUEVA ZELANDA","ISLANDIA","RUSIA","JAPON","IRLANDA",
"UCRANIA","SINGAPUR","POLONIA","ITALIA","AZERBAIYAN","YUGOSLAVIA","CHAD","TONGA","SUDAFRICA","HOLANDA","BELICE","GUYANA",
"LIBIA","IRAN","IRAK","ARABIA SAUDITA","EGIPTO","SUDAN","NIGER","MADAGASCAR","AUSTRALIA","GHANA","PORTUGAL"];

const MAX_FALLOS= 5;

const createWord= a =>{
    let word=a[parseInt(numberRamdom(a))]
    return word
}

const welcome= ()=>console.log(`
..::BIENVENIDO A "EL JUEGO DEL AHORCADO"::..
tu mision sera descubrir la palabra secreta,
   la cual es uno de los paises del MUNDO.
 `);

const secretWord = a => "_".repeat(parseInt(a.length))

const discoverCharacter = (word,secret,character)=>{
    word= word.split("")
    secret= secret.split("")
    for (let i = 0; i < word.length; i++) {
        if (word[i]===character) {
            secret[i]=character
        }   
    }
    return secret.join("")
}

export const numberRamdom= a => Math.floor(Math.random()*a.length)

 export const ahorcado= ()=>{
    let palabra=createWord(PAISES);
    let secreto=secretWord(palabra);
    let fallos = 0;
    let letrasIntentadas=""

    welcome();
    alert("Enter para continuar...")
    console.clear()
    
    while (fallos<MAX_FALLOS && palabra !== secreto) {
        console.log(`esta es la palabra secreta: ${secreto}`);
        console.log(`La palabra contiene ${secreto.length} letras.`);
        let letra= prompt("ingresa una letra...").toUpperCase()
        if(letrasIntentadas.includes(letra)){
        console.log(`la letra "${letra}" ya ha sido ingresada.`);
        }else if (palabra.includes(letra)) {
            letrasIntentadas+=letra;
            secreto=discoverCharacter(palabra,secreto,letra)
            console.log("muy bien; haz acertado.");
        }else {
            letrasIntentadas+=letra;
            fallos++
            console.log(`que lastima, haz fallado. Pero no te desanimes aun te quedan ${MAX_FALLOS-fallos} intentos.`); 
        }
    }
    if (palabra===secreto) {
        console.log(`felicitaciones!!!. ganaste!!!. La palabra secreta era "${secreto}"`);
    }
    if (fallos===MAX_FALLOS) {
        console.log(`lo siento. se te han acabado los intentos. La palabra secreta era ${palabra}`);
    }
    alert("Enter para continuar...")
    console.clear()
}