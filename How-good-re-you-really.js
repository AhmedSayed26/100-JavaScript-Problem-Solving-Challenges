console.log("How good are you really");



function Better_than_avg(array,yourPoint){

    let numbers = array.length

    let count = array.reduce((acc,current)=>{
        return acc + current
    },0)

    let avg = count / numbers
    
    if(avg < yourPoint){
        return true
    }else{
        return false
    }

}

let result = Better_than_avg([100,40,34,57,29,72,57,88],75)
console.log(result)