function load() {
    alert('Seja bem vindo(a)!')
}
function clicou() {
    let num = Number(prompt('Digite um número: '))
    let dobro = num * 2
    let metade = num / 2
    
    let res = document.getElementById('resultado')
    res.innerHTML = `O dobro de ${num} é ${dobro} e a metade é ${metade}.`

}