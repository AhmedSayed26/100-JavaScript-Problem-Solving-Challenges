console.log("Sum Arrays");

function Sum_Arrays(array){
    return array.reduce((acc , current)=>acc + current ,0)
}

let result = Sum_Arrays([1,5.2,4,0,-1]) // 9.2
console.log(result)