console.log("Calculate BMI");

// bmi = weight / hight ^ 2 
function Calculate_BMI(weight, hight) {
    let BMI = weight / Math.pow(hight,2)
    if(BMI <= 18.5){
        return "under weight"
    }else if(BMI <= 25.0){
        return "normal"
    }else if(BMI <= 30.0){
        return "overWeight"
    }else if(BMI > 30.0){
        return "Obese"
    }
} 

let result = Calculate_BMI(80,1.80)
console.log(result)