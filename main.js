$(document).ready(function () {
  $(".submit-btn").click(function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    var email = $("#email").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      //alert("Please enter a valid email address.");
      $(".error-msg").removeClass("hide");
      return false; // Prevent further action if email is invalid
    } else {
      $(".error-msg").addClass("hide");
      $(".containor1").addClass("hide");
      $(".containor2").removeClass("hide");
    }
  });
});
