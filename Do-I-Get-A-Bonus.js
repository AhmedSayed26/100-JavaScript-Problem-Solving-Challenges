console.log("Do I Get A Bonus");


// salary integer value
// bonus boolean

function bonus_time(salary , bonus){

    if(bonus){
        return `your Salary and your Bonus is ${salary * 10} `
    }else {
        return `your salary is ${salary} you don't have any bonus`
    }

}

let result = bonus_time(50000,true)
console.log(result)