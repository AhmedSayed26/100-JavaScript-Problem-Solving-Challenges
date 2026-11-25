console.log("Welcome to the city");

function sayHello(name , city , state){
    return `Welcome ${name.join(" ")} welcome to ${city} ${state}`
}

let result = sayHello(["ahmed","sayed"],"cairo" , "cairo")
console.log(result)