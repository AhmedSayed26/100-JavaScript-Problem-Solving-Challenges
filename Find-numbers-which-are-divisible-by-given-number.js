console.log("Find numbers which are divisible by given number");

function divisibleBy(array , num){
    let newArray = []
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] % num == 0){
            newArray.push(array[i])
        }
    }
    return newArray

}

let result = divisibleBy([1,2,3,4,5,6],2)
console.log(result)