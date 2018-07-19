const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

app.get('/', function(req, res) {
  res.json(JSON.parse(response.body));
})

app.get('/forge', function(req, res) {
  res.json(JSON.parse(response.body));
})

app.get('/raven', function(req, res) {
  res.json(JSON.parse(response.body));
})

app.post('/send', function(req, res) {
  
  console.log(req.body);
  const html =
    `<h2>Name: ${req.body.name}</h2>
    <h2>Email: ${req.body.email}</h2>
    <h2>Message: </h2>
    <p>${req.body.message}</p>`

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.EMAIL, // sender address
        to: 'dscherer21@gmail.com', // list of receivers
        subject: 'Websmith David Contact Form Submission', // Subject line
        text: req.body.message, // plain text body
        html: html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
