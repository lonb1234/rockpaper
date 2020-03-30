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
var winstatus=""

const curl = require("curl");
var randomNumber=""
var score1=0

var npcpick=""
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
      alert(logEventV)
      $(selectchoice).val(logEventV)
        $('#game').submit();
  })

  $(".again").on("click",function(){

    var scoreX = ($(scorez).text())
    $(points).val(scoreX)
    $(scorez).html(2)
  })

// score1=score1+1
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log("post received")




// score1=score1+1
      var num2=(req.body.selectchoice);

      var choices1=['rock','paper', 'scissors', 'lizard', 'spock']
      npcpick=choices1[Math.floor((Math.random()*5))]
      if (num2=="rock" && npcpick=="lizard" || num2=="rock" && npcpick=="scissors"||
          num2=="paper" &&  npcpick=="rock" || num2=="paper" && npcpick=="spock"||
          num2=="scissors" && npcpick=="paper" || num2=="scissors" && npcpick=="lizard"||
          num2=="spock" && npcpick=="scissors" || num2=="spock" && npcpick=="rock"||
          num2=="lizard" && npcpick=="spock" || num2=="lizard" && npcpick=="paper"){
        score1=score1+1
        winstatus="Player Won!"
      }
      else if(num2=="rock" && npcpick=="paper" || num2=="rock" && npcpick=="spock"||
              num2=="paper" && npcpick=="scissors" || num2=="paper" && npcpick=="lizard"||
              num2=="scissors" && npcpick=="rock" || num2=="scissors" && npcpick=="spock"||
              num2=="spock" && npcpick=="lizard" || num2=="spock" && npcpick=="paper"||
              num2=="lizard" && npcpick=="rock" || num2=="lizard" && npcpick=="scissors"){
      score1=score1-1
      winstatus="Player Lost!"
      }
      else{
      winstatus="It's A Draw!"
      }
    res.render("play",{score1: score1, num2: num2, npcpick: npcpick, winstatus:winstatus})
  });


  app.post('/play', function (req, res) {
    console.log("post 2")
    var points2=(req.body.points);
    console.log(points2)


res.render("index0",{score1: score1})
console.log(points2)

});


app.listen(process.env.PORT || 3000, function() {
  console.log("server is running")
})
