


function calcular() {
    let num = Number(prompt('Digite um número: '))

    let res = document.getElementById('resultado')
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p><hr>`
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
    res.innerHTML += `<p>A sua raíz quadrada é ${Math.sqrt(num)}</p>`
    res.innerHTML += `<p>A sua raíz cúbica é ${Math.cbrt(num)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`

}