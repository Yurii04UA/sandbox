const buttonFuck = document.querySelector(".fuck");
const sectionCircles = document.querySelector(".pact-section");

console.log(sectionCircles);

buttonFuck.addEventListener("click", () => {
  sectionCircles.classList.toggle("pizdec");
  console.log("work");
});
