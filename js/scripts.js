function restartQuiz(name) {
  $(".name").text(name);
  $(".question-box").hide();
  $(".result").show();
  $("#start-again-button").show();
  $("#submit-button").hide();
}


$(document).ready(function() {
  $("form#programming-language-quiz").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#enter-name").val();
    var cSharp = 0;
    var python = 0;
    var ruby = 0;

    $("input:radio:checked").each(function() {
        if ($(this).val() === "c#") {
          cSharp += 1;
        } else {
          python += 1;
        }
    });

    // RESULTS
    if (cSharp >= 3) {
      $("p.result-description#c-sharp").show();
      $("p.result-description#python").hide();
      $("p.result-description#ruby").hide();
      restartQuiz(nameInput);
    }

    else if (python >=3) {
      $("p.result-description#python").show();
      $("p.result-description#c-sharp").hide();
      $("p.result-description#ruby").hide();
      restartQuiz(nameInput);
    }

    else {
      $("p.result-description#ruby").show();
      $("p.result-description#c-sharp").hide();
      $("p.result-description#python").hide();
      restartQuiz(nameInput);
    }

    // START QUIZ AGAIN
    $("#start-again-button").click(function() {
      $(".question-box").show();
      $(".result").hide();
      $("#submit-button").show();
      $("#start-again-button").hide();
    });
  });
});


