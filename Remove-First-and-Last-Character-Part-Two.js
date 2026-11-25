console.log("Remove First and Last Character Part Two");


function Remove_First_and_Last_Char(string) {
    let newStr = string.split(",");
    if (!newStr || newStr.length < 3) return null;
    let newArray = []
    for (let i = 1; i < newStr.length - 1; i++) {
      newArray.push(newStr[i]);
    }
  return newArray.join(" ");
}
let result = Remove_First_and_Last_Char("1,2,3"); // 2
console.log(result)