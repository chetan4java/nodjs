var fs = require("fs");

console.log("Going to create directory /tmp/test");
 

fs.mkdir("/temp/a/apple",{recursive : true} ,(err) => {
    if (err) throw err;
  });
  