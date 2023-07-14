let prompt = require("prompt-sync")();

let numero = parseFloat (prompt("Digite seu numero: "))


if (numero % 2 == 0) {
    console.log ("Esse número é par!")
} else {
    console.log ("Esse número é ímpar!")
}