const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const toogleColor = document.getElementById("DWmode");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  overlay.classList.toggle("open");
});

toogleColor.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
