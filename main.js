let fs= require("fs");

console.log("Starting");

fs.writeFile("love1.txt", "Hello this is kaps", ()=>{
  console.log("Done");
  fs.readFile("love1.txt", (err, data)=>{
    console.log(err, data);
  })
});

fs.appendFile("love1.txt", " I love you", (e,d)=>{
  console.log(d);
})
console.log("Ending");

