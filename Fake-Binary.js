console.log("Fake Binary");

// x < 5 >>> 0
// x > 5 >>> 1

function Fake_Binary(str){
    let numbers = str.split("")
    let FakeBinary = numbers.map((num)=>{
        if(num >= 5){
            return 1
        }else{
            return 0
        }
    }).join("")
    return FakeBinary
}
let result = Fake_Binary("12345678")
console.log(result)