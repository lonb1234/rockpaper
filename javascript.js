  var logEventV=0
function openrules(){
$(myForm).css("display", "block");

}

function closeform(){
  $(myForm).css("display", "none");
}

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
  // $(scorez).html(2)
})






// functionality
// if (num2=="rock" && npcpick=="lizard" || num2=="rock" && npcpick=="scissors"||
//     num2=="paper" &&  npcpick=="rock" || num2=="paper" && npcpick=="spock"||
//     num2=="scissors" && npcpick=="paper" || num2=="scissors" && npcpick=="lizard"||
//     num2=="spock" && npcpick=="scissors" || num2=="spock" && npcpick=="rock"||
//     num2=="lizard" && npcpick=="spock" || num2=="lizard" && npcpick=="paper"){
//   score1=score1+1
//   alert("you win")}
// if else(num2=="rock" && npcpick=="paper" || num2=="rock" && npcpick=="spock"||
//         num2=="paper" && npcpick=="scissors" || num2=="paper" && npcpick=="lizard"||
//         num2=="scissors" && npcpick=="rock" || num2=="scissors" && npcpick=="spock"||
//         num2=="spock" && npcpick=="lizard" || num2=="spock" && npcpick=="paper"
//         num2=="lizard" && npcpick=="rock" || num2=="lizard" && npcpick=="scissors"){
// score1=score1-1
// alert("you lose")
// }
// else{
//   alert("draw")
// }
