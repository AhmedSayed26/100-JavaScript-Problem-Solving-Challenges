console.log("Grasshopper Terminal game move function");


function move(Postion,Roll){
    return (Roll * 2) + Postion
}

let result = move(3,6)
console.log(result)