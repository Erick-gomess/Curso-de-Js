function carregar(){
    let fundo = document.querySelector('.fundo')
    let msg = document.querySelector('.msg')
    let img = document.querySelector('.foto')
    let hora = new Date()
    hora = hora.getHours()
    let minutos = new Date()
    minutos = minutos.getMinutes()

    if(hora >= 6 && hora < 12){
        //bom dia
        img.src = 'imagens/manha.png'
        fundo.style.backgroundColor = ' #e2cd9f'
        msg.innerHTML = `Agora são ${hora}:${minutos}<br> Bom dia flor do dia!`
    }
    else if(hora >= 12 && hora <18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        fundo.style.backgroundColor = ' #ffba2f'
        msg.innerHTML = `Agora são ${hora}:${minutos}<br> Boa tarde!`
    }
    else if(hora >= 18 && hora <= 23 ){
        //boa noite
        img.src = 'imagens/noite.png'
        fundo.style.backgroundColor = ' #141414'
        msg.innerHTML = `Agora são ${hora}:${minutos}<br> Boa noite!`
    }
    else{
        msg.innerHTML = `Agora são ${hora}:${minutos}<br> Madrugando rapaz?`
        img.src = 'imagens/noite.png'
        fundo.style.backgroundColor = 'rgb(0, 0, 0)'
    }

    if(hora == 0){
        msg.innerHTML = `Agora são ${hora}${hora}:${minutos}<br> Madrugando rapaz?`
        //pra ficar igual ao relógio, que meia noite marca '00:00'
    }
}