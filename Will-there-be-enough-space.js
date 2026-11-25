console.log("Will there be enough space");

// numbers of people 
// numbers of people exelde the driver
// numbers of people wating the driver

function enough(cap, on, wait) {
  let numbersOfPlaces = cap - on
  if(numbersOfPlaces >= wait){
    return 0
  }else {
    return Math.abs(numbersOfPlaces - wait)
  }
}

let result = enough(20,5,5)
console.log(result)