console.log("Playing Banjo");


function Playing_Banjo(name){

    let Str = name.charAt(0).toUpperCase()
    if(Str == "R"){
        return `${name} yes playing Banjo`
    }else{
        return `${name} doesn't playing Banjo`
    }

}
let result = Playing_Banjo("Ahmed")
console.log(result)