const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", window.scrollY);
});
