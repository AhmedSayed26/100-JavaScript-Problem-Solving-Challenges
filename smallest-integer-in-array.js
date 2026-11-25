console.log("smallest integer in the array");

// solution : 1

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         console.log(args)
//         return Math.min(...args);
//     }
// }

// solution : 2

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let newArray = args.sort((a,b)=> a-b)
//     return newArray[0];
//   }
// }

// solution : 3
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0]
    for(let i = 0 ; i < args.length ; i++){
        if(args[i] <= smallest){
            smallest = args[i]
        }
    }
    return smallest ;
  }
}


const finder = new SmallestIntegerFinder();

let result = finder.findSmallestInt([10, 20, 30, 5]);

console.log(result); // 5
