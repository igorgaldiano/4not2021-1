let vetor = [10,20,30]

let obj = {
    nome: ' Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

//Desestruturação de vetor: as variaveis do let podem ter qualquer nome
let [x,y,z,w] = vetor
console.log(x)
console.log(y)
console.log(z)

//Desestruturação de objetos: as variaveis do let DEVEM ter os mesmos nomes das propriedades, não importa a ordem
let {naturalidade, nome, idade}= obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 = {
    marca: 'Volkvagem',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

let {modelo, ano} = obj2
console.log(modelo)
console.log (ano)

let vet2 =['laranja','maça', 'pera']

// Não dá certo: desestruturação parcial de vetor
//let [undefined, fruta2, undefined]
//console.log(fruta2)

let [fruta1, fruta2] = vet2
console.log(fruta1)
console
.log(fruta2)

//ignoramos o primeiro elemento (deixe uma virgula na posicao a ignor)
let [, f2, f3] = vet2
console.log(f2)
console.log(f3)
