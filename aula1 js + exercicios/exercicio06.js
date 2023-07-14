let prompt = require("prompt-sync")();

let nota1 = parseFloat (prompt ("Digite sua primeira nota: ")) 
let nota2 = parseFloat (prompt ("Digite sua segunda nota: "))
let nota3 = parseFloat (prompt ("Digite sua terceira nota: "))
let nota4 = parseFloat (prompt ("Digite sua quarta nota: "))

let soma = nota1 + nota2 + nota3 + nota4
let notafinal = soma/4
if (notafinal >= 7){
    console.log ("Sua nota é "+ notafinal, "Parabéns! Você foi aprovado!!")
} else if (notafinal <=5) {
    console.log ("Sua nota é "+ notafinal, "Que pena, você foi reprovado =/")
} else {
    console.log ("Sua nota é "+ notafinal, "Eita, você está de recuperação, estude mais!")
}