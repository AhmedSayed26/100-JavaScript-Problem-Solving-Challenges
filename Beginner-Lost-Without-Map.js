console.log("Beginner Lost Without a Map");


function Beginner(array){
    return array.map((arr)=> arr * 2)
}

let result = Beginner([1,2,3])
console.log(result)