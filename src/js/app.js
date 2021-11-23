import GameController from "./gameController";

export default class App {
  constructor() {
    this.score = 0;
    this.r = document.getElementsByClassName('box');
    for (let i of this.r) {
      i.addEventListener("goblinClick", (event) => {
        event.preventDefault();
        this.score += 1;
        console.log(this.score)
      });
    }
    this.calculateRandom = () => Math.floor(Math.random() * 16);
  }

  getRandomGoblin() {
    if (!this.goblin) this.goblin = document.getElementById('goblin');
    if (!this.box) this.box = document.getElementsByClassName('box');
    this.random = this.getRandom();
    for (const element of this.box) {
      if (element.getAttribute('data-id') === this.random.toString()) {
        if (this.prevElement) this.prevElement.removeChild(this.goblin);
        else this.goblin.classList.remove('hide');
        element.appendChild(this.goblin);
        let event = new Event("goblinClick");
        this.goblin.dispatchEvent(event);
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
    setInterval(() => this.getRandomGoblin(), 1000);
  }
}

const app = new App();
app.start();
