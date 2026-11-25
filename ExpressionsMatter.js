console.log(" Expressions Matter");


function higherResult(a,b,c){
    return Math.max(
        a+b+c,
        a*b*c,
        (a + b) * c ,
        a * (b+c) 
    )

}

let result = higherResult(2,1,2)
console.log(result)