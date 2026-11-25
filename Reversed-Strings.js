console.log("Reversed Strings");



function Reversed_Strings(str){
    return str.split("").reverse().join("")
}


let result = Reversed_Strings("world")
console.log(result)