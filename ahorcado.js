const PAISES= ["ARGENTINA", "BRASIL","CHILE","PARAGUAY","URUGUAY","ECUADOR","COLOMBIA","VENEZUELA","BOLIVIA","CANADA","MEXICO","NICARAGUA","CUBA"];
const MAX_FALLOS= 5;

const createWord= a =>{
    let word=a[parseInt(numberRamdom(a))]
    return word
}

const secretWord = a => "_".repeat(parseInt(a.length))

const findLetter = (word,letter)=>{
    let pos= 0;
    let i=0;

    while(i!=-1){
        i=word.indexOf(letter,i);
        if(i!=-1){
        pos++
        i++
    };
    }
    return pos
}

const numberRamdom= a => Math.floor(Math.random()*a.length)

//console.log(secretWord(PAISES))

let word= createWord(PAISES)
let secret= secretWord(word)

console.log(word)
console.log(secret)
console.log(findLetter("nicaragua","a"))

