import App from './app';

export default class GoblinController {
  constructor(goblin) {
    this.goblin = goblin;
  }

  goblinClick() {
    this.goblin.addEventListener('click', () => {
      this.goblin.classList.add('hide');
    });
  }

  startGame() {
    const btn = document.getElementById('start');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const app = new App();
      this.goblinClick();
      app.hits.innerText = 'Попаданий: 0';
      app.miss.innerText = 'Промахов: 0';
      app.start();
    });
  }
}

const app = new App();
const goblinController = new GoblinController(app.goblin);
goblinController.startGame();
app.start();
