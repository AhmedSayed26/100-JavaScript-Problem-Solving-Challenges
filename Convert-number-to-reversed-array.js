console.log("Convert-number-to-reversed-array");


function Convert_number_to_reversed_array(num){

    let reversed_array = num
      .toString()
      .split("")
      .reverse()
      .map((num) => {
        return Number(num);
      });
    return reversed_array;

}

let result = Convert_number_to_reversed_array(123456);
console.log(result)