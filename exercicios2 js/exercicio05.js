let prompt = require("prompt-sync")()

let compra = parseFloat(prompt("Qual o valor da sua compra: "))
let descontoDez = 0.10
let descontoVinte = 0.20

if (compra <= 100) {
    console.log ("Você não recebeu desconto =/")
} else if (compra > 100 && compra <= 200) {
    console.log ("Você recebeu um desconto de 10%")
    compra -= (compra * descontoDez)
    console.log ("O valor total da sua compra ficou em: " + compra)
} else if (compra > 200) {
    console.log("Você recebeu um desconto de 20%")
    compra -= (compra * descontoVinte)
    console.log ("O valor total da sua compra ficou em: " + compra)
}