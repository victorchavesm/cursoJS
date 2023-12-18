let num = [5, 8, 9, 3, 10, 12, 13, 11, 10]
console.log(num)
console.log(`Teste ${num}`)
console.log(num[1])



num[3] = 1000
console.log(num)
num.push(32323232)
console.log(`TESTE ${num}`)


// comprimento do array: num.length
console.log(num.length)

// ordenar
console.log(num.sort())

console.log(num.sort(function(a,b){return a - b}))


console.log(num[0, 2])
