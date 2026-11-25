console.log("Parse nice int from char problem");

function getAge(inputString) {
    return Number(inputString.split("")[0]);
}

let result = getAge("5 years old")
console.log(result) 