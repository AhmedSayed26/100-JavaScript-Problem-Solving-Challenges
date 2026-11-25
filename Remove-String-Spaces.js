console.log("Remove String Spaces");



function Remove_string_spaces(str){

    let newStr = str.split(" ").join("")
    return newStr 

}


let result = Remove_string_spaces("hello Ahmed This is Me")
console.log(result)