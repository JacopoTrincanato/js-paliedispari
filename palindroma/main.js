console.log('ciao');

//palindromo: parola che al contrario rimane invariata

//FASE 1
//creo una variabile che chieda all'utente di inserire una parola
let word

//FASE 2
//assegno un valore alla variabile word
word = prompt('Inserisci una parola');

//FASE 3
//creo una funzione per capire se la parola è palindroma
function palindromicWord() {
    let oppositeWord = word.reverse();
    return oppositeWord;
}

console.log(palindromicWord);
