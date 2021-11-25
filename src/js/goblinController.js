export default class GoblinController {
  constructor(goblin) {
    this.goblin = goblin;
  }

  goblinClick() {
    this.goblin.addEventListener('click', () => {
      this.goblin.classList.add('hide');
    });
  }
}
