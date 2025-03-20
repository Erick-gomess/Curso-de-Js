// cria o evento que chama a função da tabuada quando clicar no botão 
const tabuada = document.getElementById('botao')
tabuada.addEventListener('click', tabuadas)   

//função pra criar uma tabuada
function tabuadas(){
    let numero = Number(document.querySelector('#tb').value)
    let res = document.querySelector('.res')
    
    let tb = document.querySelector('#tab')
    if(numero == 0){
        alert('[Erro] digite um número')
    }
    else{
        tb.innerHTML = ''
        for(let i = 0;i <= 10;i++){
        let tab = document.createElement('option')
        tab.text = `${numero} X ${i} = ${numero * i}`
        tb.appendChild(tab)
    }
    }
    
}