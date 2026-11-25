console.log("Powers of 2");

function Powers_of_2(num){
    let newArray = []
    for(let i = 0 ; i <= num ; i++ ){
        let power = Math.pow(2,i)
        newArray.push(power)
    }
    return newArray; 
}

let result = Powers_of_2(2)
console.log(result)