console.log("Name Shuffler");

function nameShuffler(str) {
    let array = str.split(" ")
    return array.reverse().join(" ")
}

let result = nameShuffler("ahmed sayed")
console.log(result)

