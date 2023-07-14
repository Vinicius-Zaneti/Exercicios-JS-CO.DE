let prompt = require("prompt-sync")();

let salario = parseFloat (prompt("Quanto é o seu salário: ") )
let porcentagem = 0.30

if (salario <= 500) {
    salario += (salario * porcentagem)
    console.log ("Seu salário recebeu um reajuste, parabéns!!" + salario)
} else {
    console.log ("Seu salário não teve reajuste =/")
}

