let contador = 0
let res = document.querySelector('section#resultado')

function contar() {
    contador ++
    res.innerHTML = `<p>O contador está com <strong><mark>${contador}</mark></strong> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}