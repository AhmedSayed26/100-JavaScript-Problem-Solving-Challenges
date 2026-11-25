console.log("palindrome");


function palindrome(str){

    let myStr = str.split("").reverse().join("")
    if (myStr.toLowerCase() == str.toLowerCase()) {
      return "yes Palindrome";
    } else {
      return "no Palindrome ";
    }

}

let result = palindrome("Hello");
console.log(result) 