console.log("N th Power");

function index(array , n){
    let index = array[n];
    return Math.pow(index,2) || -1
}

let result = index([1,2,4],2)
console.log(result)