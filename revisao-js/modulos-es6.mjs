//ES -> ECMAScript versao 6, 2016
// o ponto ./ é a pasta atual


//Toda vez que o arquivo tem export (sem default), a importacao precisa acontecer entre chaves(desestruturação)
import {numeros} from './includes/dados.mjs'
//Podemos importar so que vamos efetivamente usar, caso o arquivo origem exporte mais de um item
//import {somaVet, quadradoVet}from '/.includes/funcoes.mjs'
import {somaVet, quadradoVet} from './includes/funcoes.mjs'

//Quando existe export default no arquivo de origem, a importação não tem chaves
import dobraVet from './includes/funcoes2.mjs'

console.log(somaVet(numeros))
console.log(dobraVet(numeros))