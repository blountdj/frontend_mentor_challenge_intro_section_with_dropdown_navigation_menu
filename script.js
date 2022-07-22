// Variables
const featuresBtn = document.querySelector(".nav__menu__item--features");
const companyBtn = document.querySelector(".nav__menu__item--company");
const mobileMenuOpenIcon = document.querySelector(".nav__icon__wrapper");
const navContainer = document.querySelector(".nav__container");
const main = document.querySelector(".main");
let menuState = "closed";

// Functions
function activeToggle() {
  this.classList.toggle("active");
}

function mobileMenu() {
  navContainer.classList.toggle("active");
  main.classList.toggle("active");
}

// Event listeners
document.addEventListener("click", function (e) {
  if (menuState === "closed" && e.target === mobileMenuOpenIcon) {
    animate();
    mobileMenu();
    menuState = "open";
    return;
  }

  if (
    (menuState === "open" && e.target === mobileMenuOpenIcon) ||
    (menuState === "open" && e.target.matches(".main"))
  ) {
    animate();
    mobileMenu();
    menuState = "closed";
    return;
  }
});

featuresBtn.addEventListener("click", activeToggle);
companyBtn.addEventListener("click", activeToggle);

function animate() {
  // Remove starting no animation class
  const t = document.querySelectorAll(".nav__icon__line");
  console.log(t, typeof t);
  t.forEach((el) => {
    el.classList.remove("noAnimation");
  });

  // toggle animation class
  document.querySelector(".nav__icon").classList.toggle("transform-active");
}
