console.log('ciao');

//palindromo: parola che al contrario rimane invariata

//FASE 1
//creo una variabile che chieda all'utente di inserire una parola
let originalWord

//FASE 2
//assegno un valore alla variabile word
originalWord = prompt('Inserisci una parola');
console.log(originalWord);


//FASE 3
//creo una funzione per capire se la parola è palindroma
function palindromicWord(word) {
    if (word == originalWord) {
        return true;
    }

    return false;
    
    

}

console.log(palindromicWord());

//palindromicWord()
