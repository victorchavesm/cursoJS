function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#EEDDC2'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#8F5D56'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4848a3'
        
    }
}

//#EEDDC2 manha
//#8F5D56 tarde
//#4848a3 noite