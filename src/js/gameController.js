export default class GameController {
  constructor() {
    this.score = 0;
    this.goblin = document.getElementsByClassName('.box');
    for (let i of this.goblin) {
      i.addEventListener("goblinClick", (event) => {
           event.preventDefault();
           this.score += 1;
           console.log(this.score)
         });
    }
    // this.goblin.addEventListener("goblinClick", (event) => {
    //   event.preventDefault();
    //   this.score += 1;
    // });
  }
}
