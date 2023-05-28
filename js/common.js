//project_dt.html include
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
document.addEventListener("DOMContentLoaded", function() {
  var menuBtn = document.querySelector(".menu_btn");
  var menuList = document.querySelector("ul");

  menuBtn.addEventListener("click", function() {
    menuList.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  var menuItems = menuList.querySelectorAll("li");

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
      menuList.classList.remove("active");
    });
  });
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
