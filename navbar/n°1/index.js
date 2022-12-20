button = document.getElementById("navbarToggler");
collapse = document.getElementById("navbarCol");
collapseInterieur = document.querySelector(".navbar-nav");
collapseInterieurAnch = document.querySelector(".nav-link");

const computedStyle = window.getComputedStyle(collapseInterieurAnch).marginTop;
const newcomputedStyle = computedStyle.substring(0, computedStyle.length - 2);
const heightCollapse = collapseInterieur.clientHeight + newcomputedStyle * 2;

var isOpen = false;
button.addEventListener("click", () => {
  if (!isOpen) {
    collapseInterieur.style.display = "block";
    collapse.style.height = heightCollapse + "px";
    isOpen = true;
  } else {
    collapse.style.height = "0px";
    isOpen = false;
  }
});
