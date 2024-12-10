// variaveis
let variavel = 'sou alteravel'    // variavel variavel
const constante = 'Não é redeclaravel'   // variavel constante
// var                  // não é boas práticas

variavel = 1
// proibido reassinar uma constante
// constante = 2


// console 
console.log(variavel)    //uso cotidiano
console.error(constante)    //error
console.info('sou uma informação')  //informação
console.warn('Var é depreciado')    // alerta

// tipos de dados
const lastName = 'souto'
let age = 25
const person = {
    name: 'rafael',
    age: 23,
    gender: 'male'
}
const fruits = ['banana', 'uva']

console.table(fruits)
console.table(person)


fetch('viacep.com.br/ws/01001000/json/')
.then(res => res)
.then(data => console.log(data.json{}))
.catch(error => console.error(error))