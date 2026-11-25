console.log("Vowel Remover");


// remove a , e , i , o , u from string
// Solution 1
function Shortcuts(str){
    let VowelChars = ["a" , "e" , "i" , "o" , "u"]
    let result = []
    for(let i = 0 ; i < str.length ; i++){
            if(!VowelChars.includes(str[i])){
                    result.push(str[i])
                }
            }
    return result.join("")
}

// Solution 2

// function Shortcuts(str){
//     return str.replace(/[a,e,i,o,u]/g,"")
// }

let result = Shortcuts("Ahmed")
console.log(result)