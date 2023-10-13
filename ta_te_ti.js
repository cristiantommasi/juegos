let jugadas=["","","","","","","","",""];
let jugadas1=["x","o","x","o","x","o","x","o",""];
let jugador1= "";
let jugador2= "";
let turno="";
let movimiento=undefined;
const inicio =()=>{
    console.log(`
     bienvenido al juego de
           TA TE TI
    deberas conseguir formar
     tres simbolos en linea
          para ganar.
           Suerte!!!`)
}

const mostrarTablero = ()=>{
    console.log(`
    (1)     |(2)        |(3)      
       ${jugadas[0]}     |    ${jugadas[1]}       |   ${jugadas[2]}
            |           |
    ------------------------------
    (4)     |(5)        |(6)
    ${jugadas[3]}        |   ${jugadas[4]}        |  ${jugadas[5]} 
            |           |
    ------------------------------
    (7)     |(8)        |(9)
    ${jugadas[6]}        |    ${jugadas[7]}       |  ${jugadas[8]} 
            |           |
    `
    );
}

const eligeFicha = () =>{
    let jugador="";
    while(jugador!="x" && jugador!="o"){
        jugador = prompt(`elige la ficha con la cual quieres comenzar: ("x") o ("o")`);
    };
    if(jugador.toLowerCase()==="x"){
        jugador1=jugador.toUpperCase()
        jugador2="O"
    }else{
        jugador1=jugador.toUpperCase()
        jugador2="X"
    };
    return 
}

const mostrarFichas = ()=>console.log(`
Los jugadores han elegido las 
fichas de la siguiente manera:
        Jugador 1 = ${jugador1}
        Jugador 2 = ${jugador2}

`);

const hayGanador= ()=>{
    if(jugadas[0]==jugadas[1]==jugadas[2]==turno || jugadas[3]==jugadas[4]==jugadas[5]==turno || 
        jugadas[6]==jugadas[7]==jugadas[8]==turno || jugadas[0]==jugadas[3]==jugadas[6]==turno ||
        jugadas[1]==jugadas[4]==jugadas[7]==turno || jugadas[2]==jugadas[5]==jugadas[8]==turno ||
        jugadas[0]==jugadas[4]==jugadas[8]==turno || jugadas[2]==jugadas[4]==jugadas[6]==turno){
        return true
    }else{
        return false
    }
}

const tableroLleno = ()=>{
    if((jugadas.every(el=> el!=""))){
        return true
    }else{
        return false
    }
} 

const casillaLibre = ()=>(jugadas[movimiento] === "")?true:false

const movimientoJugador = ()=>{
    let posiciones = ["1","2","3","4","5","6","7","8","9"];
    let posicion= undefined;
    while(true){
        if(!posiciones.includes(posicion)){
            posicion= prompt("Elige una casilla del tablero que no este ocupada (1-9): ")
        }else{
            if(!casillaLibre()){
                console.log("lL casilla elegida esta ocupada.");
            }else{
                return parseInt(posicion-1)
            }
        }
    }
}

const taTeTi = ()=>{
    inicio()
    eligeFicha()
    mostrarFichas()
    mostrarTablero()
    if(jugador1==="X"){
        turno==jugador1
    }else[
        turno==jugador2
    ]
    let partida=true;
    while(partida){
        if(tableroLleno()){
            console.log("La partida ha terminado en un empate.");
            partida=false

        }else if(turno==jugador1.toUpperCase()){
            console.log(`Es el turno de la ficha: "${jugador1}"`);
            let casilla=movimientoJugador();
            jugadas[casilla]==jugador1;
            turno==jugador2;
            mostrarTablero();
            if(hayGanador()){
                console.log(`Felicitaciones. El jugador que eligio las fichas "${jugador1}" haganado.`);
                partida=false;
            }
        }else if(turno==jugador2.toUpperCase()){
            console.log(`Es el turno de la ficha: "${jugador2}"`);
            casilla==movimientoJugador();
            jugadas[casilla]==jugador1;
            turno==jugador2;
            mostrarTablero();
            if(hayGanador()){
                console.log(`Felicitaciones. El jugador que eligio las fichas "${jugador2}" haganado.`);
                partida=false;
            }
        }
    }
}
            

taTeTi()



