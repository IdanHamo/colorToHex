const colors = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const button = document.getElementById("btn");
const color = Array.from(document.getElementsByClassName("color"))[0];

button.addEventListener("click", () => {
  hexColor();
});

function hexColor() {
  let currentColor = `#`;

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * colors.length);
    currentColor += colors[random];
  }

  color.innerText = currentColor;
  document.body.style.backgroundColor = currentColor;
}
