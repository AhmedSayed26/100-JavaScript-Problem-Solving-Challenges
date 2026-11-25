console.log("Double Char ");



function Double_Char(str){

    let StrArray  =  str.split("")
    for(let i = 0 ; i < StrArray.length ; i++ ){
        StrArray[i] = StrArray[i] + StrArray[i]
    }
    let finalArray = StrArray.join("")
    return finalArray; 

}

let result = Double_Char("Ahmed")
console.log(result)