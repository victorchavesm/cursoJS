function clicou() {
    let num1 = Number(prompt('Digite o primeiro número: '))
    let num2 = Number(prompt('Digite o segundo número: '))
    let soma = num1 + num2
    let res = document.getElementById('resultado')
    res.innerHTML = `A soma de <mark>${num1}</mark> + <mark>${num2}</mark> é igual a ${soma}`
}