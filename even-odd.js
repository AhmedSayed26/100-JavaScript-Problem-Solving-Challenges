console.log("hello world");


// 
function EvenOrOdd(number){
    if(number % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
}

// shortcuts for function

// function EvenOrOdd(number) {
//   return number % 2 == 0 ? "even" : "odd"
// }



let result = EvenOrOdd(3);
console.log(result)