console.log("Printing-Array-elements-with-Comma-delimiters");


function Printing_Array(array){

    let newStr = array.join(",")
    return `"${newStr}"`
}

let result = Printing_Array(["h","o","I","a"]) // "h,o,l,a"
console.log(result)