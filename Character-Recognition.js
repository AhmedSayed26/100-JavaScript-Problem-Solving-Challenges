console.log("Character Recognition");


// 0 >>> o
// 5 >>> s
// 1 >>> i


function CharacterRecognition(str){

    let array = str.split("")
    for(let i = 0 ; i < array.length ; i++ ){
        if(array[i] == '5'){
            array[i] = "S"
        }else if(array[i] == '1'){
            array[i] = "i"
        }else if(array[i] == '0' ){
            array[i] = "o"
        }
    }
    return array.join("").toLowerCase()
}

let result = CharacterRecognition("a1h5me0d")
console.log(result)