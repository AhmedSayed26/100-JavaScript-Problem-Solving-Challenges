console.log("Counting-sheeps");


function Counting_sheeps(array){

    let count = 0 
    let NumbersOfSheeps  = array.map((arr)=>{
        if(arr === true){
            count++
        }
    })
    console.log(array);
    return count
}

let result = Counting_sheeps([true, true, false, true]);

console.log(result)