let res = null

function parouimp(numero){
    if(numero % 2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

res = parouimp(2)

console.log(res)