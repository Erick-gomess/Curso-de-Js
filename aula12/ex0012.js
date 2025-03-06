var hora_atual = new Date()
var hora = hora_atual.getHours()

if(hora == 0){
    console.log(`A hora atual é ${hora}${hora} horas`)
}
else if(hora == 1){
    console.log(`A hora atual é ${hora} hora`)
}
else{
    console.log(`A hora atual é ${hora} horas`)
}

if((hora >= 6) && (hora <12)){
    console.log('Bom dia!')
}
else if((hora <= 18) && (hora >= 12 )){
    console.log('Boa Tarde!')
}
else if((hora <= 23) && (hora > 18)){
    console.log('Boa noite!')
}
else{
    console.log('Está madrugando rapaz?')
}
