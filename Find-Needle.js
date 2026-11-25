console.log("Find_Needle");

function Find_Needle(array){
    for(let i = 0 ; i < array.length ; i++ ){
        if(array[i] === "Needle"){
            return `Found The Needle at Position ${i}`;
        }
    }
    
}


let result = Find_Needle(["AAA","BBB","CCC","Needle","DDD","FFF"]);
console.log(result)