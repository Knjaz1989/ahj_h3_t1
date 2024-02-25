

export default class Image{

  setImage(box) {
    let oImg = document.createElement("img");
    oImg.setAttribute('src', 'images/goblin.png');
    oImg.setAttribute('height', '150px');
    oImg.setAttribute('width', '150px');
    box.appendChild(oImg);
  }

  deleteImage() {
    let image = document.querySelector(".box > img");
    image.remove();
  }
}