console.log("Basic Mathematical Operations");
// solution 1
function Basic_Mathematical_Operations( operation , num1 , num2) {
   if(operation == "+" ) return num1 + num2
   if(operation == "-" ) return num1 - num2
   if(operation == "*" ) return num1 * num2
   if(operation == "/" ) return num1 / num2
}
// solution 2
function Basic_Mathematical_Operations( operation , num1 , num2) {
   return eval(num1 + operation + num2)
}

let result = Basic_Mathematical_Operations("*",5,6)
console.log(result)