"user strict";

// function res() checks viewport width, adds animations if mobile
function res() {
  if ($(window).width() <= 768 || (window.matchMedia("(max-width: 768px)").matches)) {
    $('#bison').addClass('animated');
    $('#bison').addClass('flipInY');
    $('#bison').addClass('delay-1s');
    $('#bison').addClass('slow');
    $('#tron').addClass('animated');
    $('#tron').addClass('rotateInDownRight');
    $('#tron').addClass('delay-1s');
    $('#tron').addClass('slow');
  } else if ($("window").width() <= 380) {
    $("#head_h1").removeClass('display-4');
    $("#head_h1").addClass('h2-responsive');
  } else {
    $('#bison').removeClass('animated');
    $('#bison').removeClass('flipInY');
    $('#bison').removeClass('delay-1s');
    $('#bison').removeClass('slow');
    $('#tron').removeClass('animated');
    $('#tron').removeClass('rotateInDownRight');
    $('#tron').removeClass('delay-1s');
    $('#tron').removeClass('slow');
  }
};

var x = window.matchMedia("(max-width: 768px)")

// create event listener for window load
window.onload = function () {
  setInterval("res()", 1); // create and load timer for res()
  x.addListener(res()); // create window resize listener, attach res() to it
};

// create event listener for window unload
window.onunload = function () {
  clearInterval("res()"); // clear timer attached to res()
};