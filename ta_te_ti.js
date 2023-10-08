let jugadas=["(1)","(2)","(3)","(4)","(5)","(6)","(7)","(8)","(9)"]
let fichas = []
const inicio =()=>{
    console.log(`
     bienvenido al juego de
           TA TE TI
    deberas conseguir formar
     tres simbolos en linea
          para ganar.
           Suerte!!!`)
}

const mostrarTablero = (jugadas)=>{
    console.log(`
            |           |       
     ${jugadas[0]}    |    ${jugadas[1]}    |   ${jugadas[2]  }
            |           |
    ------------------------------
            |           |
     ${jugadas[3] }    |    ${jugadas[4]   }    |   ${jugadas[5] }
            |           |
    ------------------------------
            |           |
     ${ jugadas[6]}    |    ${jugadas[7] }    |   ${jugadas[8] }
            |           |
    `
    );
}

const eligeFicha = () =>{
    let jugador="";
    while(jugador!="x" && jugador!="o"){
        jugador = prompt(`elige la ficha con la cual quieres comenzar: ("x") o ("o")`);
    };
    if(jugador==="x"){
        fichas[0]=jugador
        fichas[1]="o"
    }else{
        fichas[0]=jugador
        fichas[1]="x"
    };
    return fichas
}


const taTeTi = ()=>{
    inicio()
    eligeFicha(fichas)
    mostrarTablero(jugadas)
    

}

taTeTi()