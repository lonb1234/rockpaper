const bodyParser = require("body-parser")
const request = require("request")
const express = require("express")
const https = require("https")
const jquery = require("jquery")
const jsdom = require("jsdom")
const browserify = require("browserify")
const app = express();



const curl = require("curl");




var JSDOM = jsdom.JSDOM;
global.document = new JSDOM("/index.html").window.document;

app.use(express.static("public"));
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({
  extended: true
}))
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

   // if (req.param('action') == '/play') {
   //   console.log("post 2")
   //   var points2=(req.body.points);
   //   console.log(points2)
   //     // res.sendFile(__dirname + "/index")
   //   }
   //
   // else{
  console.log("post received")
  // function parseData(html) {
  //   const {
  //     JSDOM
  //   } = jsdom;
  //   const dom = new JSDOM(html);
  //   const $ = (require('jquery'))(dom.window);
  //   var tekst=$(h5).html()
  //   console.log(tekst);}

      var num2=(req.body.selectchoice);
      console.log(num2)

    res.sendFile(__dirname + "/play.html")
  });


  app.post('/play', function (req, res) {
    console.log("post 2")
    var points2=(req.body.points);
    console.log(points2)
      res.sendFile(__dirname + "/")

});


app.listen(3000, function() {
  console.log("server is running")
})
