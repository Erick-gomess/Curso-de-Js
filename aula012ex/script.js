function carregar(){
    let fundo = document.querySelector('.fundo')
    let msg = document.querySelector('.msg')
    let img = document.querySelector('.foto')
    let hora = new Date()
    hora = hora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manha.png'
        fundo.style.backgroundColor = ' #e2cd9f'
        
    }
    else if(hora >= 12 && hora <18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        fundo.style.backgroundColor = ' #ffba2f'
    }
    else{
        //boa noite
        img.src = 'imagens/noite.png'
        fundo.style.backgroundColor = ' #141414'
    }
}