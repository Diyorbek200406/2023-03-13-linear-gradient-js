/* ------------- lesson-55 -------  */

// DOM => Document Object Model

// random linear gradient

const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");
let values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// random color function

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.trunc(Math.random() * values.length);
    color += values[random];
  }
  return color;
}

// set color to body
function setGradient() {
  const randomColor1 = getGradient();
  const randomColor2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = ` linear-gradient(
    ${randomDeg}deg,
    ${randomColor1},
    ${randomColor2}
  )`;
  body.style.background = bgColor;
  colorText.textContent = bgColor;
}
setGradient();

container.addEventListener("click", setGradient);
