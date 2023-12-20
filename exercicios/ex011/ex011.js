function calcular() {
    let nome = prompt('Digite o nome do aluno: ')
    let nota1 = Number(prompt('Digite a primeira nota do aluno: '))
    let nota2 = Number(prompt('Digite a segunda nota do aluno: '))
    let media = (nota1 + nota2) / 2
    let msg = ''
    if(nome == '' || nota1 == '' || nota1 > 10 || nota2 == '' || nota2 > 10 ) {
        alert('Você digitou algo errado. Tente novamente.')
    } else {
        if (media >= 7){
            msg = 'Parabéns! Aprovado por média.'
        } else {
            msg = 'Estude um pouco mais.'
        }
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong>.</p>`
    res.innerHTML += `<p>A média final será <strong>${media}</strong>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
    res.innerHTML += ''
}