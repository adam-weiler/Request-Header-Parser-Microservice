// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) { //User is visiting the whoami url.
  let user_ip = req.ip; //Gets the user IP address.
  //let user_ip = req.header('x-forwarded-for') || req.connection.remoteAddress; //Gets another flavour of user IP address.
  let user_lang = req.headers["accept-language"]; //Gets user language.
  let user_sw = req.headers["user-agent"]; //Gets user software.
  
  res.json({ipaddress: user_ip,language: user_lang,software: user_sw});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});