$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const foodInput = $("input#food").val();
    const musicInput= $("input#music").val();
    const dayInput= $("input#day").val();
    const day = $("#day").val();
    const flavor = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("#color").val();
$("name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".day").text(dayInput);
  });
});

