console.log("Remove Exclamation Marks");

function Shortcuts(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      result.push(str[i]);
    }
  }
  return result.join("");
}

// Solution 2

// function Shortcuts(str){
//     return str.replace(/[!]/g,"")
// }

let result = Shortcuts("Ahme!d!!sayed");
console.log(result);