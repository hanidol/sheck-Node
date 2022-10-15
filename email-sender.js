var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pir243777@gmail.com",
    pass: "fstlxglehtjaidbg",
  },
});

var mailOptions = {
  from: "pir243777@gmail.com",
  to: "haninasri14@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
