let prompt = require("prompt-sync")();

let numero1 = prompt ("Digite o Primeiro número: ")
let numero2 = prompt ("Digite o Segundo número: ")

if (numero1 > numero2) {
    console.log ("O " + numero1, "é maior que o segundo número!")
} else if (numero2 > numero1) {
    console.log ("O " + numero2,"é maior que o primeiro número!")
}