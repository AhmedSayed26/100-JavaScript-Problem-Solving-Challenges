console.log("Removing Elements");


function RemoveSecondElement(array){

    array.splice(1, 1);
    return array;

}

let result = RemoveSecondElement(["hello" , "ayHaga" , "world"])
console.log(result)