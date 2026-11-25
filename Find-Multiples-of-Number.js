console.log("Find Multiples of a Number");


function Find_Multiples(int, limit){

    let array = []
    for(let i = 1 ; i <=limit ; i++){
        if(i*int > limit){
            return array
        }else{
            array.push(i*int)
        }
    }
    return array

}

let result = Find_Multiples(4,27)
console.log("result = " , result)