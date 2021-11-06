$(document).ready(function() {
  $("form#programming-language-quiz").submit(function(event) {
    event.preventDefault();

    var cSharp = 0;
    var python = 0;
    var ruby = 0;

    if ($("input:radio[name=search-engine]:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name=search-engine]:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }
    
    if ($("input:radio[name=application]:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name=application]:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name=operating-system]:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name=operating-system]:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name=company]:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name=company]:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if ($("input:radio[name=learning]:checked").val() === "c#") {
      cSharp += 1;
    }
    else if ($("input:radio[name=learning]:checked").val() === "python") {
      python += 1;
    }
    else {
      ruby += 1;
    }

    if (cSharp >= 0) {
      //show result and description//
      
    }
  });
});

