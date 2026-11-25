console.log("How many lightsabers do you own");


function How_many_lightsabers(name = "ahmed"){
    return name.toLocaleLowerCase() === "zach" ? 18 : 0
}

let result = How_many_lightsabers("adam")
console.log(result)