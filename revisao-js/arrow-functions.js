//Função para fins ilustrativos. Se precisar realmente elevar um numero ao quadrado, use o operador ** ou a função Math.pow

function quadrado(n){
    return n * n // n ** 2
}

//Reescrevendo a função anterior como arrow function
// 1) Os parenteses em torno do argumento sao emitidos
// 2) A palavra function, ANTES do argumento, é substituido pelo simbolo => APOS o argumento
// 3) As chaves sao omitidas
// 4) A palavra return é omitida


const quadrado2 = n => n * n

console.log(quadrado(8), quadrado(8))

//Funcao com mais de 1 argumento
function potencia(b,e){
     //b = base, e = expoente
}

// Com 1 + argumentos, os paranteses em volta deles devem retornar
let potencia2 = (b,e) => b**e
console.log(potencia2(2,6), potencia2(2,6))

//Função sem argumentos
function megasena(){
    //Retorna um numero aleatorio entre 1 e 60
    // Math.random() -> retorna um numero aleatorio entre 0 e 1
    // Multiplicadno por 60 -> temos um numero entre 0 e 59 (fracionário)
    // Soma 1 -> ajusta a faixapara entre 1 e 60
    // floor() -> retirar as casas decimais


    return Math.floor (Math.random()*60 + 1)
}

console.log(megasena(), megasena(), megasena())


//Arrow function para corpos com mais de uma linha
//voltam as chaves
// (Os parenteses em torno do argumento sao necessarios por se tratar de uma argumento de resto)

let somaTudo2 = (...nums)=>{
    let soma = 0
    for (let n of nums)soma +=n
    return soma
}

// Conclusao: o formato arrow function é indicado quando a funcao se resolve apenas uma linha (ou poucas linhas, como exceção)