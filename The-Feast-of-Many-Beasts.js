console.log("The Feast of Many Beasts");


function feast(beast,dish){

    let firstCharOfBeast = beast.at(0)
    let lastCharOfBeast = beast.at(-1)

    let firstCharOfDish = dish.at(0)
    let lastCharOfDish = dish.at(-1)
    
    if(firstCharOfBeast == firstCharOfDish && lastCharOfBeast == lastCharOfDish){
        return true
    }else{
        return false
    }

}

let result = feast("brown bear" , "bear claw")
console.log(result)