const header = document.querySelector("header");
const bodyMenu = document.querySelector(".body-hamburger");
const headerMenu = document.querySelector(".header-hamburger");
const topBtn = document.querySelector(".top");

//Window Scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", window.scrollY);
  topBtn.classList.toggle("active-top", window.scrollY > 1200);
});

// Menu Button
headerMenu.addEventListener("click", () => {
  if (headerMenu.getAttribute("aria-expanded") == "false") {
    headerMenu.setAttribute("aria-expanded", "true");
    bodyMenu.setAttribute("aria-expanded", "true");
  } else {
    headerMenu.setAttribute("aria-expanded", "true");
  }
});

bodyMenu.addEventListener("click", () => {
  if (bodyMenu.getAttribute("aria-expanded") == "false") {
    bodyMenu.setAttribute("aria-expanded", "true");
  } else {
    bodyMenu.setAttribute("aria-expanded", "false");
    headerMenu.setAttribute("aria-expanded", "false");
  }
});

// Year in Footer
const year = document.querySelector(".year");
const whatYear = new Date().getFullYear();
year.textContent = whatYear;

// Nav Link Active
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__link-desktop");
let mobileLinks = document.querySelectorAll(".nav__link");

// Change theme colours
const darkLightBtn = document.querySelector(".light-dark-mode");
const lightBtn = document.querySelector(".light-mode");
const darkBtn = document.querySelector(".dark-mode");
const logoImageOne = document.querySelector(".logo-image-1");
const logoImageTwo = document.querySelector(".logo-image-2");

darkLightBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  lightBtn.classList.toggle("active-theme");
  darkBtn.classList.toggle("active-theme");
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight - 100;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        document
          .querySelector(".nav__link-desktop[href*=" + id + "]")
          .classList.add("active-link");
      });
      mobileLinks.forEach((link) => {
        link.classList.remove("active-link");
        document
          .querySelector(".nav__link[href*=" + id + "]")
          .classList.add("active-link");
      });
    }
  });
});

let scrollPosition = window.scrollY;
