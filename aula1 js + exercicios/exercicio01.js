let prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome? ")
let cargo = prompt("Qual o seu cargo? ")
let salario = parseFloat( prompt ("Quanto é seu salário? ") )
let porcentagem = 0.10



if(salario <1000) {
    salario += (salario * porcentagem)
    console.log ("Seu nome é: "+ nome, "Seu cargo é: " + cargo, "Seu salário é:" + salario)
}else {
    console.log ("Seu nome é: "+ nome, "Seu cargo é: " + cargo, "Seu salário é:" + salario)
}

