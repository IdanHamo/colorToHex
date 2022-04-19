const colors = ["red", "pink", "blue", "brown", "rgba(22,25,78)"];

const button = document.getElementById("btn");
const color = Array.from(document.getElementsByClassName("color"))[0];

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * colors.length);
  const currentColor = colors[random];

  color.innerText = currentColor;
  document.body.backgroundColor = currentColor;
  document.body.style.backgroundColor = currentColor;
});
