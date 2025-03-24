let jogadores = ['Neymar','Cr7','Messi','Wesley(cafu)']
console.log('Jogadores: ')
/*
for(let i = 0;i<jogadores.length;i++){
    console.log(`${jogadores[i]}`)
*/

for(let i in jogadores){
    console.log(jogadores[i])
}