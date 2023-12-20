function clicou() {
    let info = new Date 

    let res = document.querySelector('section#resultado')
    res.innerHTML = `O que eu recebi do seu sistema foi <mark>${info}</mark>`
}