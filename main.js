let fs= require("fs");

console.log("Starting");

fs.writeFile("love1.txt", "Hello this is kaps", ()=>{
  console.log("Done");
  fs.readFile("love1.txt", (err, data)=>{
    console.log(err, data);
  })
});

fs.appendFile("index.html", " I love you 2", (e,d)=>{
  console.log(d);
})
console.log("Ending");
/*
fs.open("index.html", "w", (err, f)=>{
  if(err) throw err;
  console.log("f");
})
*/fs.unlink('love1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
fs.writeFile('love2.txt',"Hey what is up" ,(err, f)=>{
  console.log("File created with a bang!")
})

fs.rename('love2.txt','love5.txt', (err, f)=>{
  console.log("Home")
})