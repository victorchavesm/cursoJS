function calcular(){
    let num = Number(prompt('Digite um número pra saber se é par ou ímpar: '))
    let parimpar

    if (num % 2 == 0) {
        parimpar = 'PAR!'
    } else {
        parimpar = 'ÍMPAR!'
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>O número digitado foi ${num} que é <strong>${parimpar}</strong></p>`
}