const header = document.querySelector("header");
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", window.scrollY);
});

menuBtn.addEventListener("click", () => {
  if (menuBtn) {
    menuBtn.classList.toggle("is-active");
    menu.classList.toggle("active");
  }
});
