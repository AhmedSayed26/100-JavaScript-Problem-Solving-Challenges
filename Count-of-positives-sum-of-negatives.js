console.log("Count-of-positives-sum-of-negatives");




function Count_of_positives_sum_of_negatives(array){

    let NumberOfPositiveElement = 0 
    let SumOfNegatives = 0


    for(let i = 0 ; i < array.length ; i++ ){
        if(array[i] > 0 ){
             NumberOfPositiveElement = NumberOfPositiveElement + 1;

        }else {
            console.log("sum of negatives")
            SumOfNegatives = SumOfNegatives + array[i]
        }
    }
    return [NumberOfPositiveElement, SumOfNegatives];

}

let result = Count_of_positives_sum_of_negatives([1,2,3,4,5,-1,-2]);
console.log(result)