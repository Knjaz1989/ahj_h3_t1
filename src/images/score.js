export default class Score {
  constructor() {
    this.loses = document.querySelector(".loses-score");
    this.wins = document.querySelector(".wins-score");
  }

  addWin(){
    let score = this.wins.textContent;
    score = Number(score) + 1;
    this.wins.textContent = score;
  }

  addLose(){
    let score = this.loses.textContent;
    score = Number(score) + 1;
    if (score === 5) {
      alert("Вы проиграли");
      this.wins.textContent = 0;
      this.loses.textContent = 0;
    } else {
      this.loses.textContent = score;
    }
  }
}