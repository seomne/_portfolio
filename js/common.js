AOS.init();

window.addEventListener("load", function () {
  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});

//menu open
$(document).on("click", ".menu_btn", function (e) {
  e.preventDefault();

  if ($(this).is(".active")) {
    $(this).removeClass("active");
    $("#header .header_wrap .logo, #header .header_wrap ul").removeClass(
      "active"
    );
  } else {
    $(this).addClass("active");
    $("#header .header_wrap .logo, #header .header_wrap ul").addClass(
      "active"
    );
  }
});

//menu close
$(document).on("click", "#header .header_wrap ul.active li a", function () {
  $("#header .header_wrap ul.active").fadeOut();
});

//Modal open
$(".open-modal").on("click", function () {
  var state = $(this).data("state");
  $("#modal" + state).fadeIn();
});
//background press close
$(document).on("click", ".madal-bg", function () {
  $(".modal").fadeOut();
});
//close press close
$(document).on("click", ".close", function () {
  $(".modal").fadeOut();
});
