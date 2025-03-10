console.log("hello world")

const fs = require('fs');
fs.writeFile ("output.txt","writing file", (err)=>{
  if(err) console.log("Error writing file",err);
  else console.log("writing file");
});
