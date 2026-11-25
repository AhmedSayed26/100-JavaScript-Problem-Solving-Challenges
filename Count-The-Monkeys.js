console.log("Count The Monkeys");


function Count_The_Monkeys(n){
    let array = []
    for(let i = 1 ; i <= n ; i++){
        array.push(i)
    }
    return array

}

let result = Count_The_Monkeys(10)
console.log(result)