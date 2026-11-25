console.log("Bool To Word");


function Bool_to_Word(array){

    let newArray  = array.map((arr)=>{
        return arr === true ? "no" : "yes"
    })

    return newArray


}

let result = Bool_to_Word([true , true , false])
console.log(result)