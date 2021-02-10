let nome = "João"
let idade = 26

//Mensagem usando concatenação
console.log('Meu nome é ' + nome + ' e minha idade é ' + idade + '.')

// Mensagem usando Template Literal
console.log(`O meu nome é ${nome} e minha idade é ${idade}.`)
console.log(`O meu nome é ${nome.toUpperCase()} e minha idade é ${idade}.`)
console.log(`7 vezes 6 igual a ${7 * 6}.`)

//Tentando usar template literals com outro tipo de aspas
console.log("O meu nome é ${nome} e minha idade é ${idade}.")