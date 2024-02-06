const gridContainer = document.querySelector(".grid-container");
const btnGreen = document.getElementById("green");
const btnRainbow = document.getElementById("rainbow");
const gridInput = document.getElementById("grid-input");
const selectedInput = document.getElementById("selected-input");
const reloadBtn = document.getElementById("reload");

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

function createGrid() {
  const gridSize = parseInt(gridInput.value);
  gridContainer.innerHTML = "";
  if (gridSize >= 3 && gridSize <= 25) {
    document.documentElement.style.setProperty("--grid-size", gridSize);

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridContainer.appendChild(gridCell);

        function paintGreen() {
          gridCell.addEventListener(
            "mouseover",
            () => (gridCell.style.backgroundColor = "#05f428")
          );
        }
        btnGreen.addEventListener("click", paintGreen);

        function paintRainbow() {
          gridCell.addEventListener(
            "mouseover",
            () => (gridCell.style.backgroundColor = chooseRandomColor())
          );
        }
        btnRainbow.addEventListener("click", paintRainbow);
      }
    }
  }
}

createGrid();

reloadBtn.addEventListener("click", () => document.location.reload());
