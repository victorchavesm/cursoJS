// percurso vetores

let num = [1, 5, 4, 2, 3, 7, 5, 1]
console.log(num)
//--------------------
// usando for
console.log('----------')

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('----------')

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
//------------------
// ordenar
console.log('----------')

//num.sort() -> comentei para nao ordenar nos blocos abaixo

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//-------------
// indexOf
console.log('----------')

console.log(num.indexOf(5))

let pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`A posição de 4 é ${pos}`)
}