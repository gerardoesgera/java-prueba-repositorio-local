//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert('Acertaste el numero');
} else {
    //La condicion no se cumplio
    alert('Nah, equivocado');
}