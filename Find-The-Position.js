console.log("Find The Position");

function Find_Position(letter){
    const alphpet = "abcdefghijklmnopqrstuvwxyz"
    return `Position of alphpet ${alphpet.indexOf(letter)+1} `;
}

let result = Find_Position("z")
console.log(result)