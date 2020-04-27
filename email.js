var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'yousending email',
        pass: 'ourpassword'
    }
});

const mailOptions = {
  from: 'yousending email', // sender address
  to: 'reciever email', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});