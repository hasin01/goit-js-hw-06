const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});
