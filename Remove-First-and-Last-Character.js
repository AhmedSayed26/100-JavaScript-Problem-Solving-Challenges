console.log("Remove First and Last Character");


// solution 1

function Remove_First_Last_Char(str) {

  return str.slice(1,-1);
} 

// solution 2

// function Remove_First_Last_Char(str){

//     let convertStrToArray = str.split("")
//     convertStrToArray.pop()
//     convertStrToArray.shift()

//     return convertStrToArray.join("")
// } 
let result = Remove_First_Last_Char("Ahmed")
console.log(result)