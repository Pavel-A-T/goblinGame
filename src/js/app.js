import GoblinController from './goblinController';

export default class App {
  constructor() {
    this.score = 0;
    this.faul = 0;
    this.goblin = document.getElementById('goblin');
    this.calculateRandom = () => Math.floor(Math.random() * 16);
  }

  getRandomGoblin() {
    if (this.faul === 5) clearInterval(this.timerInterval);
    if (!this.box) this.box = document.getElementsByClassName('box');
    this.random = this.getRandom();
    for (const element of this.box) {
      if (element.getAttribute('data-id') === this.random.toString()) {
        if (this.prevElement) {
          if (this.goblin.classList.contains('hide')) this.score += 1;
          else this.faul += 1;
          this.prevElement.removeChild(this.goblin);
        }
        this.goblin.classList.remove('hide');
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
}

const app = new App();
const goblinController = new GoblinController(app.goblin);
goblinController.goblinClick();
app.start();
