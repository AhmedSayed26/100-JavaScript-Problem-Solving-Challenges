console.log("AddLength");

function AddLength(str){
    let array = str.split(" ")
    let newArray = array.map((arr)=>{
        return arr + " " + arr.length
    })
    return newArray
}

let result = AddLength("apple ban")
console.log(result)