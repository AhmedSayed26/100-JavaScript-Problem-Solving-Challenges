console.log("Grasshopper - Check for factor");

function checkForFactor(base, factor) {
    return base % factor === 0
}

let result = checkForFactor(10,2)
console.log(result)