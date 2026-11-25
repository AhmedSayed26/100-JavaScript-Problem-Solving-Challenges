console.log("reversed Words");

function reversed_words(str){
    return str.split(" ").reverse().join(" ")
}

let result = reversed_words("hello! world")
console.log(result)