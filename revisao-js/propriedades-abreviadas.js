//Criando um objeto cujo valor das propriedades vem de variaveis

let usuario='joao'
let senha = 'Deus123'
let name = ' João das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo = {
    login: usuario,
    password: senha, 
    name, // Propriedade abreviada(name: name
    lastLogin //(lastlogin: lastlogin)
}

// sempre que aparecer um objeto sem o dois pontos, a propriedade é abreviada

 console.log(userInfo)

 
 let info = 'Isto é um teste '
 console.log(info)
 console.log({info})