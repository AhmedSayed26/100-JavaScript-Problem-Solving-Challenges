console.log("Well of Ideas Easy Version");

function well(array) {
    count = 0 
    for(let i = 0 ; i < array.length ; i++){
        if(array[i]== "good"){
            count += 1
        }
    }
    if(count == 0){
        return "Fail!";
    }else if (count == 1){
        return "Publish!";
    }else{
        return "I smell a series!";
    }
}
let result = well(["bad", "bad", "bad","good","good"]);
console.log(result)