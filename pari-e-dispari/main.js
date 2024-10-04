let choice = prompt('Scegli pari o dispari');
console.log(choice);

let userNumber = Number(prompt('Inserisci un numero da uno a cinque'));
console.log(userNumber);

let computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);


//creo una funzione che verifichi se il numero è pari
function is_even(num) {
    if (num % 2 == 0) {
        return true;
    }
   
    return false;
}