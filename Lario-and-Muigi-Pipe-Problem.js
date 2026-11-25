console.log("Lario and Muigi Pipe Problem");


function Pipe(numbers){
    let NewArray = []
    let SortedArray = numbers.sort((a,b) => a-b)
    let MinNum = SortedArray[0]
    let MaxNum = SortedArray.at(-1)
    for(let i = MinNum ; i <= MaxNum ; i++){
        NewArray.push(i)
    }
    return NewArray


}

let result = Pipe([1,3,5,7,8])
console.log(result)