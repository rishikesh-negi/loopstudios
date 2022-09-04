const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  menuBtn.classList.toggle("fixed");
  navMenu.classList.toggle("menu-open");
  navMenu.classList.toggle("menu-close");

  document.body.classList.toggle("stopscroll");
});
