console.log("To-Square-Root-Or-Not-To-Square-Root");


function To_Square_Root_Or_Not_To_Square_Root(array){

    let newArray = array.map((arr) => {
        if(Math.sqrt(arr) % 1 == 0){
            return Math.sqrt(arr)
        }else{
            return arr*arr
        }
    }) 

    return newArray

}

let result = To_Square_Root_Or_Not_To_Square_Root([4,3,9,7,2,1]) // [2,9,3,49,4,1]
console.log(result)