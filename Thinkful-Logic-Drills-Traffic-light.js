console.log("Thinkful Logic Drills Traffic light");


function updateLight(current) {
  switch (current) {
    case "red":
      return "green";
    case "yellow":
      return "red";
    case "green":
      return "yellow";
    default:
      break;
  }
}
let result = updateLight("red");
console.log(result)