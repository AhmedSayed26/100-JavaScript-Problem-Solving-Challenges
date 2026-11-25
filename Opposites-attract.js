console.log("Opposites attract");


function Opposites_attract(flower1 , flower2){
    return flower1 % 2 !== flower2 % 2
}

let result = Opposites_attract(4,7)
console.log(result)