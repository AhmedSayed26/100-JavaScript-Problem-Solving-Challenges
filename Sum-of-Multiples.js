console.log("Sum of Multiples");

function sumOfMulti(n,m){

    let array = []
    for(let i = 1 ; i < m ; i++){

        if(i*n > m){

          let sum = array.reduce((acc,curr)=>{
              return acc + curr
          },0)

          return sum

        }else{

         array.push(i*n)
         
        }
    }
}

let result = sumOfMulti(3,13) // 2 , 4 ,  6 , 8
console.log(result)

