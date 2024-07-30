const header = document.querySelector("header");
const menuBtn = document.querySelector(".hamburger");

//
window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", window.scrollY);
});

menuBtn.addEventListener("click", () => {
  if (menuBtn.getAttribute("aria-expanded") == "false") {
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
