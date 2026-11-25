console.log("No Zeros For Heros");


function No_Boring_Zero(num){
    let Strnum = String(num).split("")
    console.log(Strnum)
    while (Strnum.at(-1) === "0") {
        Strnum.pop();
    }
    return Number(Strnum.join(""));
}

let result = No_Boring_Zero(1056000)
console.log(result)