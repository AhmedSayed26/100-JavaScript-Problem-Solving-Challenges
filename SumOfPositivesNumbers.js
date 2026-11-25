console.log("sum of positives numbers")
// Steps : 
// Init value of sum = 0 
// Array Loop 
// Check if the number positive 
// Add the number of init value if positive


// solution 1 : with default for loop and if statement
function SumOfPositivesNumbers(arr){
    let sum = 0 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0 ){
            sum = sum + arr[i]
        }
    }
    return sum

}

// solution 2 : with filter and reduce (js high order functions)

// function SumOfPositivesNumbers(array) {
//     let sum = 0 
//     let newArray = array
//       .filter((arr) => {
//         return arr > 0;
//       })
//       .reduce((sum, total) => {
//         return sum + total
//       } , sum);

//       console.log(newArray)

//       return newArray

// }

let result = SumOfPositivesNumbers([1,-4,7,11]);
console.log(result)