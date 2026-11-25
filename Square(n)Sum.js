console.log("Square(n) Sum");


function SquareNum(array){
    return array
      .map((arr) => arr * arr)
      .reduce((acc, current) => acc + current, 0);
}

let result = SquareNum([1,2,2])
console.log(result)