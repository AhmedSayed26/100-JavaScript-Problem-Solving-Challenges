console.log("Reversing Words in a String");

function Reversing_Words_in_a_String(str){

    let ReversingWords = str.split(" ").reverse().join(" ")
    return ReversingWords
    
}

let result = Reversing_Words_in_a_String("hello word")
console.log(result)