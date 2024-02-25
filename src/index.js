import './images/goblin.png';
import './images/hammer32px.png';
import './style.css';
import Box from './js/box.js';
import Image from './js/image.js';
import Score from './images/score.js';


document.addEventListener('DOMContentLoaded', function () {
  
  const boxes = document.querySelectorAll(".box");

  const boxInst = new Box(boxes);
  const imageInst = new Image();
  const scoreInst = new Score();

  boxes.forEach(box => {
    box.addEventListener("click", () => {
      boxInst.deleteColor();
      if (box.children.length == 0) {
        box.style.backgroundColor = 'red';
        scoreInst.addLose();
      } else {
        box.style.backgroundColor = 'green';
        scoreInst.addWin();
      }
    })
  });

  let currentBox = boxInst.getRandomBox();
  imageInst.setImage(currentBox);

  setInterval(() => {
    let box = boxInst.getRandomBox();
    imageInst.deleteImage();
    boxInst.deleteColor();
    imageInst.setImage(box);
  }, 575);
})