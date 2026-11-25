console.log("Get The Mean Of An Array");



function Get_The_Mean_Of_An_Array(marks){

    let sum = 0 
    let Arraylength = marks.length
    let newSum = marks.reduce((sum,total)=>{
        return sum += total
    },sum)
    let Avg = newSum / Arraylength
    return Math.round(Avg);

}

let result = Get_The_Mean_Of_An_Array([2,4,6,8,10])
console.log(result)