const heading = document.querySelector(".heading");
const sub_heading = document.querySelector(".sub_heading");
const paragraph = document.querySelector(".paragraph");
const btn = document.querySelector(".btn");
const color_container = document.querySelector(".color_container");
const image_box = document.querySelector(".image_box");

const randomColorGenrator = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    shuffleColors();
  }
};

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex_val");

  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copied";
    setTimeout(() => {
      colorElement.innerText = hexVal;
    }, 1000);
  });
};

const createElement = (color) => {
  const element = document.createElement("li");
  element.classList.add("color");
  element.innerHTML = `<div class="rect_box" style="background: ${color}"></div>
                        <span class="hex_val">${color}</span>`;

  element.addEventListener("click", () => copyColor(element, color));

  color_container.appendChild(element);
};

const shuffleColors = () => {
  color_container.innerHTML = null;

  let color = `#${randomColorGenrator().padStart(6, 0)}`;
  document.body.style.backgroundColor = color;
  createElement(color);

  color = `#${randomColorGenrator().padStart(6, 0)}`;
  heading.style.color = color;
  createElement(color);

  color = `#${randomColorGenrator().padStart(6, 0)}`;
  sub_heading.style.color = color;
  createElement(color);

  color = `#${randomColorGenrator().padStart(6, 0)}`;
  paragraph.style.color = color;
  createElement(color);

  color = `#${randomColorGenrator().padStart(6, 0)}`;
  image_box.style.backgroundColor = color;
  createElement(color);

  color = `#${randomColorGenrator().padStart(6, 0)}`;
  btn.style.backgroundColor = color;
  createElement(color);
};
