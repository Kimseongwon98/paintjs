const mixedColor = document.querySelector(".mixedColor");
const colors = document.getElementById("jsColors");

function getColorPicker(event) {
  colors.removeChild(mixedColor);
  const input = document.createElement("input");
  input.classList.add("custom-color");
  input.classList.add("controls__color");
  input.setAttribute("type", "color");
  colors.appendChild(input);
  input.click();
}

function init() {
  mixedColor.addEventListener("click", getColorPicker);
}

init();
