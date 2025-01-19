let fs= require("fs");

console.log("Starting");

fs.writeFile("love1.txt", "Hello this is kaps", ()=>{
  console.log("Done");
});
console.log("Ending");
