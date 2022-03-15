function carregar(){
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()

    var turno = window.document.getElementById('shift')
    var imagem = window.document.querySelector('img#image')
    var saudacao = window.document.getElementById('message')

    turno.innerHTML = `Agora são ${horas} hora(s) e ${minutos} minuto(s).`

    if (horas >= 0 && horas <= 4) {
        imagem.src = './imagens/batman.png'
        document.body.style.background = '#010101'
        saudacao.innerHTML = '<strong>Você é o Batman?</strong>'
        
    }
    else if (horas >= 5 && horas < 12) {
        imagem.src = './imagens/morning.png'
        document.body.style.background = '#f7c665'
        saudacao.innerHTML = '<strong>BOM DIA!</strong>'
    }
    else if (horas >= 12 && horas <= 17) {
        imagem.src = './imagens/afternoon.png'
        document.body.style.background = '#e7641d'
        saudacao.innerHTML = '<strong>BOA TARDE!</strong>'
    } 
    else {
        imagem.src = './imagens/night.png'
        document.body.style.background = '#1d2236'
        saudacao.innerHTML = '<strong>BOA NOITE!</strong>'
    }

}
