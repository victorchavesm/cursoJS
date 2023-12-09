function clicou() {
    var nome = prompt('Qual é o seu nome?')
    var res = document.getElementById('resultado')
    res.innerHTML = `Olá ${nome}! É um prazer te conhecer.`
}