console.log("Stringy Strings");

function StringyStrings(size){
    let array = []

    for(let i = 0 ; i <= size ; i++){
        if (array.at(-1) == undefined) {
          array.push(1);
        } else if (array.at(-1) == 1) {
          array.push(0);
        } else if (array.at(-1) == 0) {
          array.push(1);
        }
    }
    return Number(array.join(""))
}

let result = StringyStrings(5)
console.log(result)