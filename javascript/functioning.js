// $(function () {
//   getElementsById("menu").click(function () {
//     getElementsById("ul").toggleClass("active");
//   });
// });

$("#menu").click(function () {
  $("ul").toggleClass("active");
});

var anchors = $("li a").click(function () {
  $(this).addClass("active_");
  anchors.not(this).removeClass("active_");
});

// $(document).ready(function () {
//   $(".ul li a").on("click", function () {
//     $(this).siblings().removeClass("click");
//     $(this).addClass("click");
//   });
// });

// var menu = document.querySelector(".li");
// menu.addEventListener("click", function () {
//   Elemental.toggleClass(this, "click");
// });

// $("a").on("click", function () {
//   $(this).addClass("click").prevAll("li").first().removeClass("click");
// });
// $("li").click(function () {
//   $("a").addClass("click").siblings("active").removeClass("click");
//   //   $(this).toggleClass("click");
// });
// $(".li2").click(function () {
//   $("#li2").addClass("click");
// });
// $(".li3").click(function () {
//   $("#li3").addClass("click");
// });
// $(".li4").click(function () {
//   $("#li4").addClass("click");
// });
