const board = document.querySelector("#board");

const colors = [
  "#94ff7f",
  "#f07fff",
  "#e74c3c",
  "#7f92ff",
  "#3498db",
  "#e67e22",
  "#8e44ad",
  "#2ecc71",
];
const CIRCLE_NUMBER = 600;

for (let i = 0; i < CIRCLE_NUMBER; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.addEventListener("mouseover", () => {
    setColor(circle);
  });

  circle.addEventListener("mouseleave", () => {
    removeColor(circle);
  });

  board.append(circle);
}

function setColor(elem) {
  const color = getRandomColor();

  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
