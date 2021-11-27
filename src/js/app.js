export default class App {
  constructor() {
    this.score = 0;
    this.faul = 0;
    this.goblin = document.getElementById('goblin');
    this.hits = document.getElementById('hits');
    this.miss = document.getElementById('miss');
    this.calculateRandom = () => Math.floor(Math.random() * 16);
  }

  getRandomGoblin() {
    if (!this.box) this.box = document.getElementsByClassName('box');
    this.random = this.getRandom();
    for (const element of this.box) {
      if (element.getAttribute('data-id') === this.random.toString()) {
        if (this.prevElement) {
          if (this.goblin.classList.contains('hide')) {
            this.score += 1;
            this.hits.innerText = `Попаданий: ${this.score}`;
          } else {
            this.faul += 1;
            this.miss.innerText = `Промахов: ${this.faul}`;
          }
          this.prevElement.removeChild(this.goblin);
        }
        this.goblin.classList.remove('hide');
        if (this.faul === 5) clearInterval(this.timerInterval);
        element.appendChild(this.goblin);
        this.prevElement = element;
        return;
      }
    }
  }

  getRandom() {
    let randomize = this.calculateRandom();
    while (randomize === this.random) {
      randomize = this.calculateRandom();
    }
    return randomize;
  }

  start() {
    this.timerInterval = setInterval(() => this.getRandomGoblin(), 1000);
  }

  // startGame() {
  //   const btn = document.getElementById('start');
  //   btn.addEventListener('click', () => {
  //     console.log("а")
  //     const app = new App();
  //     const goblinController = new GoblinController(this.goblin);
  //     goblinController.goblinClick();
  //     app.hits.innerText = 'Попаданий: 0';
  //     app.miss.innerText = 'Промахов: 0';
  //     app.start();
  //   });
  // }
}
