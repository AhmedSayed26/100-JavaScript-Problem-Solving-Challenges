console.log("Transportation On Vacation");



// take a car it cost ber day = 40$
// if you take a car for 7 days or more you take discount 50$ for total
// if you take a car for 3 days or more you take discount 20$ for total



function Transportation_On_Vacation(days){

    let CarCost = 40 
    let totalCost = 0

    if(days < 3 ){
        totalCost = days * CarCost;
    }else if(days >= 3 && days < 7){
        totalCost = (days * CarCost) - 20
    }else {
        totalCost = days * CarCost - 50;
    }

    return totalCost


}

let result = Transportation_On_Vacation(7)
console.log(result)