console.log("Dollar And Cents");

function Dollar_And_Cents(num){
    return `$${Number(num.toFixed(2))}`
}

let result = Dollar_And_Cents(39.99)
console.log(result)