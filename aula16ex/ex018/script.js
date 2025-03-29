const add = document.querySelector('.add')
add.addEventListener('click', adicionar)
const btfn = document.querySelector('.fn')
btfn.addEventListener('click', finalizar)
let vetorGlobal = []
let res = document.querySelector('.res')

function adicionar(){
    let num = Number(document.querySelector('#tb').value)
    let tabela = document.querySelector('#tab')
    
    if(num == 0){
        alert('[ERRO] - digite um número')
    }
    else if(num > 100){
        alert('[ERRO] - digite um número entre 1 e 100')
    }
    else{
        vetorGlobal.push(num)
        let option = document.createElement('option')
        option.text += `Número ${num} adicionado`
        tabela.append(option)
    }
}

function finalizar(){
    let soma = 0
    for(let i in vetorGlobal){
        soma += vetorGlobal[i]
    }
    let media = (soma/vetorGlobal.length)
   res.innerHTML += `O vetor tem ${vetorGlobal.length} números<br>`
   res.innerHTML += `A soma de todos os elementos é ${soma}<br>`
   res.innerHTML += `O maior número é   ${Math.max(...vetorGlobal)}<br>`
   res.innerHTML += `A média é ${media}<br>`
}  
