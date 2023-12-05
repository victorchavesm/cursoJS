function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // tribunal nao permite acesso ao Pexels. entao coloquei imagens que ja tinha no computador
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >=0 && idade < 10) {
                    //crianca
                img.setAttribute('src', 'imagens/manha.png')
            } else if (idade < 20) {
                    //jovem
                img.setAttribute('src', 'imagens/manha.png')
            } else if (idade < 60) {
                    //adulto
                img.setAttribute('src', 'imagens/manha.png')
            } else {
                    //idoso
                img.setAttribute('src', 'imagens/manha.png')
            } 
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >=0 && idade < 10) {
                    //crianca
                img.setAttribute('src', 'imagens/noite.png')
            } else if (idade < 20) {
                    //jovem
                img.setAttribute('src', 'imagens/noite.png')
            } else if (idade < 60) {
                    //adulto
                img.setAttribute('src', 'imagens/noite.png')
            } else {
                    //idoso
                img.setAttribute('src', 'imagens/noite.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }

}