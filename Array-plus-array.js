console.log("Array plus array")


// Solution 1
// function Array_plus_array(arr1,arr2){
//     return arr1.reduce((acc , current) => acc + current ,0) + arr2.reduce((acc,current) => acc + current,0)
// }

// Solution 2

function Array_plus_array(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, current) => acc + current, 0);
}

let result = Array_plus_array([1,2,3] , [1,2,3])
console.log(result)