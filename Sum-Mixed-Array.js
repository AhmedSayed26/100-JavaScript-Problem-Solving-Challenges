console.log("Sum Mixed Array");


function SumArray(array){
    
    let newArray = array.reduce((acc,current)=>{
        return acc + Number(current)
    },0)
    return newArray
}

let result = SumArray([1,2,"3","4",5])
console.log(result)