function calcular() {
    let num1 = Number(prompt('Digite o primeiro número a ser analisado: '))
    let num2 = Number(prompt('Digite o segundo número a ser analisado: '))
    
    let res = document.querySelector('section#resultado')

    if (num1 == num2) {
        res.innerHTML = `<p>Os números ${num1} e ${num2} são <mark>iguais</mark>.</p>`
    } else if (num1 > num2) {
        res.innerHTML = `<p>Entre os números ${num1} e ${num2}, o maior é <mark>${num1}</mark></p>`
    } else {
        res.innerHTML = `<p>Entre os números ${num1} e ${num2}, o maior é <mark>${num2}</mark></p>`
    }
        
        
    }