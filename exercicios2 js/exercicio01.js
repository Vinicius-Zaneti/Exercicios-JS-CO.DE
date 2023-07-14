let prompt = require("prompt-sync")()

let usuario = prompt ("Usuário: ")
let senha = prompt ("Senha: ")

if (usuario == "admin" && senha == "senha123") {
    console.log ("Login bem-sucedido!")
} else {
    console.log ("Login incorreto.")
}