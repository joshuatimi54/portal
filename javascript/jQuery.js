<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
$("#test").click(function () {
    $(".list").removeClass("active");
    $("#test").addClass("active");
    $("#row3").removeClass("none");
  });
  $("#about").click(function () {
    $(".list").removeClass("active");
    $("#about").toggleClass("active");
    $("#row1").removeClass("none");
  });
