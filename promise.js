import fs from "fs/promises";

let a =await fs.readFile("love5.txt");

let b= await fs.appendFile("love5.txt", "\n \n Hello");
console.log(a.toString());