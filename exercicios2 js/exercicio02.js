let prompt = require("prompt-sync")()

let numero = prompt("Digite o número de 1 a 7: ")

switch (numero) {
    case "1":
        console.log ("Esse é o número da: segunda-feira!")
        break;

    case "2":
        console.log ("Esse é o número da: terça-feira!")
        break; 
    
    case "3":
        console.log ("Esse é o número da: quarta-feira!")
        break;

    case "4":
        console.log ("Esse é o número da: quinta-feira!")
        break;

    case "5":
        console.log ("Esse é o número da: sexta-feira!")
        break;

    case "6":
        console.log ("Esse é o número do: sábado!")
        break;

    case "7":
        console.log ("Esse é o número do: domingo!")
        break;
    default:
        console.log ("Número invalido. Tente um número de 1 a 7")

}