console.log("Beginner - Reduce but Grow");

function grow(array){
    let sum = 1
    for(let i = 0 ; i<array.length ; i++){
        sum = sum * array[i]
    }
    return sum
}


// function grow(array) {
//   return array.reduce((acc,currentValue) => acc * currentValue )
// }

let result = grow([1,2,3,4])
console.log(result)