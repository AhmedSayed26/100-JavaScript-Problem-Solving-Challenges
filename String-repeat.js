console.log("String repeat");


// Solution 1 : with repeat function (js built in function)
function repeatStr(number, str) {
        return str.repeat(number)
    }


// solution 2 : with for loop
// function repeatStr(number,str){
//     let newString  = ""
//     for(let i = 0 ; i < number ; i++){
//         newString = newString + str
//     }
//     return newString
// }


let result = repeatStr(10, "ha")
console.log(result)
