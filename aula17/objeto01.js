let gato= {
    nome: 'yang', 
    sexo: 'fêmea',
    peso: 6.5,
    engordar(p){
        console.log('engordou')
        this.peso += p
    }
}
gato.engordar(1)
console.log(`${gato.nome} pesa ${gato.peso}Kg`)