console.log("Count By X");

function count_By_X(x,n){
    let z = []
    for(let i = 1 ; i <= n ; i++){
        res = i * x
        z.push(res)
    }
    return z
}



let result = count_By_X(2,5)
console.log(result)