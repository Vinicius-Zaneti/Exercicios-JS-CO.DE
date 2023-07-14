let prompt = require("prompt-sync")()

let numero1 = parseFloat (prompt("Digite o primeiro número: "))
let numero2 = parseFloat (prompt("Digite o segundo número: "))
let numero3 = parseFloat (prompt("Digite o terceiro número: "))


if (numero1 < numero2 && numero2 < numero3 ) {
    console.log ("Os numeros estão em ordem crescente!!")
} else {
    console.log ("Os números não estão em ordem crescente.")
}