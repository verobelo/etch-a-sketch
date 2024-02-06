const gridContainer = document.querySelector(".grid-container");
const btnGreen = document.getElementById("green");
const btnRainbow = document.getElementById("rainbow");
const gridInput = document.getElementById("grid-input");
const selectedInput = document.getElementById("selected-input");

gridInput.addEventListener("input", () => {
  selectedInput.textContent = gridInput.value;
  createGrid();
});

function chooseRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
