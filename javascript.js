  var logEventV = 0

  function openrules() {
    $(myForm).css("display", "block");

  }

  function closeform() {
    $(myForm).css("display", "none");
  }

  $(".border").on("click", function(event) {

    logEventV = ($(this).attr('value'));
    $(h5).html(logEventV)


    $(selectchoice).val(logEventV)


    $('#game').submit();
  })

  $(".again").on("click", function() {
    var scoreX = ($(scorez).text())
    $(points).val(scoreX)

  })
