console.log("Filter out the geese");

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let uniqueResults = birds.filter((bird) => {
    return !geese.includes(bird);
  });
  return uniqueResults;
}
let result = gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])

  console.log(result)