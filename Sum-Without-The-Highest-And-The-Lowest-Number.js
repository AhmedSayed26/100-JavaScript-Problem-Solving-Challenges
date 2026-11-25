console.log("Sum-Without-The-Highest-And-The-Lowest-Number");




// solution 1 : if we need to remove Lowest and Highest even there repeatition [1,1,2,3,4,5] >> [2,3,4]

function Sum_Without_The_Highest_And_The_Lowest_number(arr) {
    if(arr == null ) return 0
    let sum = 0

    let HighestValue = Math.max(...arr)
    let LowestValue = Math.min(...arr);
    // console.log(HighestValue , LowestValue)
    let newArray = arr.filter((arr) => {
        return arr !== HighestValue && arr !== LowestValue
    }).reduce((sum,total)=>{
        return sum + total
    },sum)
    // console.log("New Array" , newArray)
    return newArray
}


// solution 2 : if we need to remove Lowest and Highest , One removed at a time [1,1,2,3,4,5] >> [1,2,3,4]

// function Sum_Without_The_Highest_And_The_Lowest_number(arr) {
//   if (arr == null) return 0;
//   let sum = 0;

//   const SortArray  = arr.sort((a,b) => a - b)  // sort the array 
//   const NewArrayBeforeRemoveHighestAndLowest = SortArray.slice(1,-1) // remove first (Lowest) and last (Highest) element
//   console.log(NewArrayBeforeRemoveHighestAndLowest);
//   const NewArray = NewArrayBeforeRemoveHighestAndLowest.reduce((sum, total) => {
//     return sum + total;
//   }, sum);
  
//   return NewArray

// }


let result = Sum_Without_The_Highest_And_The_Lowest_number([1, 1, 2, 3, 4, 5]);  
console.log(result)