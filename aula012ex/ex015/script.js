function verificar(){
    let ano_atual = new Date()
    ano_atual = ano_atual.getFullYear()

    let anonascimento = document.querySelector('#ano')
    let ano_nascimento = Number(anonascimento.value)
    let = idade = ano_atual - ano_nascimento

    let res = document.querySelector('.res')
    let img = document.createElement('img')
    img.setAttribute('id', 'img')

    let sexo = document.getElementsByName('sexo')
    let genero = ''
    
    if(ano_nascimento == 0 || ano_nascimento > ano_atual){
        console.error('erro')
        alert('Preencha os dados corretamente.')
        
    }

    if(sexo[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'imagens/menino.png')
        }
        else if(idade < 20){
            //adolescente
            img.setAttribute('src', 'imagens/jovem_homem.png')
        }
        else if(idade < 45){
            //adulto
            img.setAttribute('src', 'imagens/adulto.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'imagens/idoso.png')
        }
    }
    else if(sexo[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/menina.png')
        }
        else if(idade < 20){
            //adolescente
            img.setAttribute('src', 'imagens/jovem_mulher.png')
        }
        else if(idade < 45){
            //adulta
            img.setAttribute('src', 'imagens/adulta.png')
        }
        else{
            //idosa
            img.setAttribute('src', 'imagens/idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é um(a) ${genero} com ${idade} anos`
    img.style.display = 'block'
    img.style.margin = 'auto'
    res.append(img)
    
    




}   