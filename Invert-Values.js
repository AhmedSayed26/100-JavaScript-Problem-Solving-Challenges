console.log("Invert Values");

function Invert(array){

    let newArray = array.map((arr)=> {
      // if(arr > 0){
      //     return - arr
      // }else{
      //     return - arr
      // }
      // OR solution : 2

      return arr * -1;
    }) 

    return newArray

}


let result = Invert([1,-2,3,-4,5])
console.log(result)  