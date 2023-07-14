console.log("exercicio 5")

let prompt = require('prompt-sync')();

// let numero = parseInt(prompt("Digite um número:"));

// if(numero >= 10 && numero <= 20){
//     console.log("O número informado está no intervalo desejado, entre 10 e 20")
// }else{
//     console.log("O número está fora do intervalo desejado!!!!!")
// }

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'cachorro':
        console.log("au auuuu")
        break;
    case 'gato':
        console.log("miauuuu")
        break;
    case 'vaca':
        console.log("muuu")
        break;
    case 'papagaio':
        console.log("ola")
         break;
    default:
        console.log("aaaa")
        break;
}