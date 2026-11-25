console.log("Unfinished Loop");

function Fix_Bug(number){

    let newArray = []
    for(let counter = 1 ; counter <= number ; counter++ ){
        newArray.push(counter)
    }
    return newArray

}

let result = Fix_Bug(10)
console.log(result)