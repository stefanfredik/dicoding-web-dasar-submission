const menu = document.querySelector(".hamburger");
const close = document.getElementById("close");
const nav = document.querySelector("nav");
const navlink = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  document.getElementById("dropdown").style.display = "flex";
  //   nav.style.display = "none";
});

close.addEventListener("click", () => {
  hideDropdown();
});

function hideDropdown() {
  document.getElementById("dropdown").style.display = "none";
}
