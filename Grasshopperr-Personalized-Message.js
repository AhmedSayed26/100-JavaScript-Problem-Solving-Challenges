console.log("Grasshopper - Personalized Message");

function greet(name , owner){

    if(name.toLowerCase()===owner.toLowerCase()){
        return `Hello boss`
    }else{
        return `Hello Guest`
    }
}
let result = greet("ahmed","ahmed")
console.log(result)