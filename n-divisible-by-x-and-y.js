console.log("n divisible by x and y");


function n_divisible_by_x_y(n,x,y){
    if(n % x == 0 && n % y == 0 ){
        return "true"
    }else{
        return "false"
    }
        
}


let result = n_divisible_by_x_y(3,1,3)
console.log(result)