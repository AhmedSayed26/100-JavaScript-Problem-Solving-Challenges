console.log("Grasshopper");

function Grasshopper(num){
    if (num < 0 ) return "num must be Bigger Than 0"
    let myArray = []
    for(let i = 0 ; i <= num ; i++){
        myArray.push(i)
    }
    let result = myArray.reduce((acc,currentValue)=>acc+currentValue)
    return result

}


// function Grasshopper(num){

//     if (num < 0 ) return "num must be Bigger Than 0"
//     let result = 0
//     for(let i = 0 ; i <= num ; i++){
//         result = result + i
//     }
//     return result

// }

let result = Grasshopper(8);
console.log(result) 