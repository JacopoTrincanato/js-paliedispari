
//palindromo: parola che al contrario rimane invariata

//FASE 1
//creo una variabile che chieda all'utente di inserire una parola
let userWord

//FASE 2
//assegno un valore alla variabile word
userWord = prompt('Inserisci una parola');
console.log(userWord);


//FASE 3
//creo una funzione che restituisca la parola invertita
function palindromicWord(word) {
    
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    console.log(reversedWord);

    return word == reversedWord;

}


if (palindromicWord(userWord)) {
    console.log('la parola è palindroma');
    
}else{
    console.log('la parola non è palindroma');
    
}
