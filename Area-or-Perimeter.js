console.log("Area or Perimeter");

const areaOrPerimeter = function (l, w) {
  if(l == w){
    return l*w
  }else{
    return (l+w) *2
  }
};

let result = areaOrPerimeter(6,10)
console.log(result)