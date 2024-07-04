//Variables
alert('Bienvenido al juego del número secreto');
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    // Acertamos, fue verdadera la condicion
    alert(`Acertaste el numero es: ${numeroUsuario}`);
} else {
    //La condicion no se cumplio
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}