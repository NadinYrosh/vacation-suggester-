$(document).ready(function() {
  $("#blanks").submit(function(event) {
    debugger;
    event.preventDefault();

    var activeInput = $("#active").val();
    var weatherInput = $("#weather").val();
    var adrenalineInput = $("#adrenaline").val();
    // var accompanyInput = $("#accompany").val();
    // var cuntryInput = $("#cuntry").val();

    if (weatherInput === 'Hot' && adrenalineInput === "Yes" ) {
      $(".sugestion1").show();
    }
    else if (weatherInput === "Cold" && adrenalineInput === "NO!") {
      $(".sugestion2").show();
    }
    else if (weatherInput === "Cold" && adrenalineInput === "Yes") {
      $(".sugestion4").show();
    // else if (weatherInput === "Cold" && adrenalineInput === "Yes") {
    //   $(".sugestion4").show();
    }
  });
});
