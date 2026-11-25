console.log("Exclusive Xor Operator");


function Xor(a,b){

    if( a == true && b == true){
        return false
    }else if (a == true || b == true) {
      return true;
    } {
        return false
    }

}

let result = Xor(false, false);
console.log(result)