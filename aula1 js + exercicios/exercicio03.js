let prompt = require("prompt-sync")();

numero = parseInt (prompt ("Digite um numero: "))

if (numero >=1){
    console.log ("o número " +numero, "é positivo!")
} else if (numero <=-1) {
    console.log ("o número " +numero, "é negativo!")
} else {
    console.log ("zero não vale!! tente outro numero")
}