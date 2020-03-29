const bodyParser = require("body-parser")
const request = require("request")
const express = require("express")
const https = require("https")
const jquery = require("jquery")
const jsdom = require("jsdom")
const browserify = require("browserify")
const ejs=require("ejs")
const app = express();

app.set('view engine', 'ejs')

const curl = require("curl");


var score1=0


var JSDOM = jsdom.JSDOM;
global.document = new JSDOM("/index.html").window.document;

app.use(express.static("public"));
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({
  extended: true
}))
app.get("/", function(req, res) {



  $(".border").on("click", function(event){

      logEventV=($(this).attr('value'));
      $(h5).html(logEventV)
      // $(h5).value(logEventV)
      alert(logEventV)
      $(selectchoice).val(logEventV)
      // alert($(h5).html())

      // $(points).html(+1)
        $('#game').submit();
  })

  $(".again").on("click",function(){
    var scoreX = ($(scorez).text())
    $(points).val(scoreX)
    $(scorez).html(2)
  })

score1=score1+1
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

score1=score1+1
      var num2=(req.body.selectchoice);
      console.log(num2)

    res.render("play",{score1: score1, num2: num2})
  });


  app.post('/play', function (req, res) {
    console.log("post 2")
    var points2=(req.body.points);
    console.log(points2)


res.render("index0",{score1: score1})
      // res.sendFile(__dirname + "/")
console.log(points2)
      function parseData(html) {
        const {
          JSDOM
        } = jsdom;
        const dom = new JSDOM(html);
        const $ = (require('jquery'))(dom.window);
      $(selectchoice).val("3")
        }

});


app.listen(3000, function() {
  console.log("server is running")
})
