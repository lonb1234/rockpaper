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
  $(scorez).html(2)
})