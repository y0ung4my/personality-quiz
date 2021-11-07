$(document).ready(function() {
  $("form#programming-language-quiz").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#enter-name").val();
    var cSharp = 0;
    var python = 0;
    var ruby = 0;

    if ($("input:radio[name='search-engine']:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name='search-engine']:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name='application']:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name='application']:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name='operating-system']:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name='operating-system']:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name='company']:checked").val() === "c#") {
      cSharp += 1;
    }

    else if ($("input:radio[name='company']:checked").val() === "python") {
      python += 1;
    }

    else {
      ruby += 1;
    }

    if ($("input:radio[name='learning']:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name='learning']:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    alert(cSharp);
    alert(python);
    alert(ruby);

    if (cSharp >= 3) {
      $(".name").text(nameInput);
      $(".language").text("C#");
      $(".result").show();
      $("p.result-description#c-sharp").show();
      $("p.result-description#python").hide();
      $("p.result-description#ruby").hide();
      $(".question-box").hide();
      $("#start-again-button").show();
      $("#submit-button").hide();
    }

    else if (python >=3) {
      $(".name").text(nameInput);
      $(".language").text("Python");
      $(".result").show();
      $("p.result-description#python").show();
      $("p.result-description#c-sharp").hide();
      $("p.result-description#ruby").hide();
      $(".question-box").hide();
      $("#start-again-button").show();
      $("#submit-button").hide();
    }

    else {
      $(".name").text(nameInput);
      $(".language").text("Ruby");
      $(".result").show();
      $("p.result-description#ruby").show();
      $("p.result-description#c-sharp").hide();
      $("p.result-description#python").hide();
      $(".question-box").hide();
      $("#start-again-button").show();
      $("#submit-button").hide();
    }

    $("#start-again-button").click(function() {
      $(".question-box").show();
      $(".result").hide();
      $("#submit-button").show();
      $("#start-again-button").hide();
    }
    
    )
    });
  });


