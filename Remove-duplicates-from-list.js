console.log("Remove duplicates from list");

function Removed_Duplicates(array){
    let NewArray = [];
    for(let i = 0 ; i < array.length ; i++){
        if (NewArray.includes(array[i])) {
          continue;
        } else {
           NewArray.push(array[i]);
        }
    }

    return NewArray;
}

// solution 2 

// function Removed_Duplicates(array) {
//   return [...new Set(array)];
// }

let result = Removed_Duplicates([1,1,2,2,3,3,4,4,5,5])
console.log(result)