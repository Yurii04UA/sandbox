const buttonFuck = document.querySelector(".fuck");
const sectionCircles = document.querySelector(".pact-section");

console.log(sectionCircles);

buttonFuck.addEventListener("click", () => {
  sectionCircles.classList.toggle("pizdec");
  console.log("work");
});


const topMenuButton = document.querySelector(".top-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

// const topMenuButton = document.querySelectorAll("div");

topMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("top-menu-active");
});