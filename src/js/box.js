export default class Box {
  constructor(boxes){
    this.boxes = boxes;
  }

  getRandomBox() {
    let filteredBoxes = [...this.boxes].filter(box => box.children.length == 0);
    return filteredBoxes[Math.floor(Math.random() * filteredBoxes.length)]
  }

  deleteColor() {
    let coloredBox = document.querySelector('[style^="background-color"]')
    if (coloredBox) {
      coloredBox.removeAttribute("style");
    }
  }
}