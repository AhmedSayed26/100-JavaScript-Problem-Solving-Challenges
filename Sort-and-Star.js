console.log("Sort and Star");

function Sort_and_Star(array){
    let MySort = array.sort((a,b) => a-b)
    let FirstValue = MySort[0]
    let result = FirstValue.split("").map((letter)=> letter+"***").join("")
    return result
}

let result = Sort_and_Star(["bitcoin" , "take" , "over" , "the" , "world"])
console.log(result)