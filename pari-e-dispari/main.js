//creo una variabile per far scegliere all'utente pari o dispari
let choice = prompt('Scegli pari o dispari');
console.log(choice);

//creo una variabile per far inserire all'utente un numero da 1 a 5
let userNumber = Number(prompt('Inserisci un numero da uno a cinque'));
console.log(userNumber);

//creo una variabile per far generare un numero random al computer da 1 a 5
let computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);


//creo una funzione che verifichi se la somma dei numeri è pari
function evenSum(userNumber, computerNumber) {
    if ((userNumber + computerNumber) % 2 == 0) {
        return true;
    }
   
    return false;
}

console.log(evenSum(userNumber, computerNumber));


//stabilisco il vincitore
if (evenSum(choice)) {
    console.log('Hai vinto');
    
}else {
    console.log('Ha vinto il computer');
    
}