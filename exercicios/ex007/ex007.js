function clicou() {
    let nome = prompt('Qual o nome do aluno?')
    let num1 = Number(prompt('Digite a primeira nota: '))
    let num2 = Number(prompt('Digite a segunda nota: '))
    let media = (num1 + num2) / 2
    let res = document.getElementById('resultado')
    res.innerHTML = `<p>Calculando a média de ${nome}.</p>`
    res.innerHTML += `<p>As notas obtidas foram ${num1} e ${num2}</p>`
    res.innerHTML += `<p>A média final foi: ${media}</p>`

}