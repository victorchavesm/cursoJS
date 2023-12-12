function contar() {
    let ini = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('step')
    let resultado = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando'
    }
}