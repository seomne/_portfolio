//scrolled menu color change
function scroll_style() {
  var window_top = $(window).scrollTop();
  var div_top = $(".project_title").offset().top;
  if (window_top > div_top) {
    $(".header_project .header_wrap .menu_btn span").css({
      backgroundColor: "#000",
    });
  } else {
    $(".header_project .header_wrap .menu_btn span").css({
      backgroundColor: "#FFF",
    });
  }
}
$(function () {
  $(window).scroll(scroll_style);
  scroll_style();
});
