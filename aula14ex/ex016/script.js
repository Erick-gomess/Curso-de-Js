function contar(){
let ni = document.querySelector('#ni')
let nf = document.querySelector('#nf')
let pass = document.querySelector('#pass')
let inicio = Number(ni.value)
let fim = Number(nf.value)
let passo = Number(pass.value)

let res = document.querySelector('.res')

if(inicio == 0 || fim == 0){
    alert('Erro, digite os valores.')
}
else if(passo == 0){
    passo++
    alert('não existe passo 0, considerando como 1.')
}
    res.innerHTML = 'contando: '
    for(let i = inicio;i<=fim;i += passo){
        res.innerHTML += `${i}... `
    }





}