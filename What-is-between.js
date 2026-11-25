console.log("What is between");


function between(a,b){

    let array = []
    for(let i = a ; i <= b ; i++){
        array.push(i)
    }
    return array
}

let result = between(1,4)
console.log(result)