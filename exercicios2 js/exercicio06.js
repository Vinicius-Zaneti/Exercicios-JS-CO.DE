let prompt = require("prompt-sync")()

let peso = parseFloat (prompt("Digite o seu peso: "))
let altura = parseFloat (prompt("Digite a sua altura: "))

let imc = peso / (altura * altura) 

if (imc < 18.5) {
    console.log ("Você está abaixo do peso.")
    console.log ("Seu imc está em" + imc .toFixed(2))
}  else if (imc >= 18.5 && imc <= 24.9) {
    console.log ("Seu peso está normal.")
    console.log ("Seu imc está em " + imc .toFixed(2))
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log ("Você está com sobrepeso.")
    console.log ("Seu imc está em " + imc .toFixed(2))
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log ("Você está com obesidade grau 1.")
    console.log ("Seu imc está em " + imc .toFixed(2))
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log ("Você está com obesidade grau 2.")
    console.log ("Seu imc está em " + imc .toFixed(2))
} else {
    console.log ("Você está com obesidade grau 3.")
    console.log ("Seu imc está em " + imc .toFixed(2))
}