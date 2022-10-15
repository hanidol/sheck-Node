var fs = require("fs");
var generator = require("generate-password");

console.log("Going to write into existing file");
fs.writeFile("generate-password", "1234567", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!");
  console.log("Let's read newly written data");
  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  // '1234567'
  console.log(password);
});
