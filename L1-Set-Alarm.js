console.log("L1 Set Alarm");

function SetAlarm(employeed,vacation){
    if(employeed && !vacation){
        return true
    }else{
        return false
    }
}
let result = SetAlarm(true, false);
console.log(result)