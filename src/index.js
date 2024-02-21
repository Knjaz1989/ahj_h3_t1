import './images/goblin.png';
import './style.css';


document.addEventListener('DOMContentLoaded', function () {
  
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.addEventListener("click", () => {
      deleteColor();
      if (box.children.length == 0) {
        box.style.backgroundColor = 'red';
      } else {
        box.style.backgroundColor = 'green';
      }
    })
  });

  function deleteColor() {
    let coloredBox = document.querySelector('[style^="background-color"]')
    if (coloredBox) {
      coloredBox.removeAttribute("style");
    }
  }

  function getRandomBox(items) {
    let filteredBoxes = [...items].filter(box => box.children.length == 0);
    return filteredBoxes[Math.floor(Math.random() * filteredBoxes.length)]
  }

  function setImage(box) {
    let oImg = document.createElement("img");
    oImg.setAttribute('src', 'images/goblin.png');
    oImg.setAttribute('height', '150px');
    oImg.setAttribute('width', '150px');
    box.appendChild(oImg);
  }

  function deleteImage() {
    let image = document.querySelector(".box > img");
    image.remove();
  }

  let currentBox = getRandomBox(boxes);
  setImage(currentBox);

  setInterval(() => {
    let box = getRandomBox(boxes);
    deleteImage();
    deleteColor();
    setImage(box);
  }, 575);
})