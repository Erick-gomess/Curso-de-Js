var idade = 70

if((idade >=18) && (idade < 70)){
    console.log('É obrigatório todo cidadão brasileiro votar a partir dos 18 até os 69 anos')
}
else if((idade >= 16) && (idade < 18) || (idade >= 70) ){
    console.log('Você pode votar, porém não é obrigatório (ponto facultativo)')
}
else{
    console.log('Você ainda não tem idade pra votar')
}
