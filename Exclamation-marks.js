console.log("Exclamation marks");

function Remove_Exclamation_marks(str){
    
    let newStr = str.split("")
    console.log(newStr)
    if (newStr.at(-1) === "!") {
        newStr.pop();
    }
    return newStr.join("")

}

let result = Remove_Exclamation_marks("Hi!!!")
console.log(result)