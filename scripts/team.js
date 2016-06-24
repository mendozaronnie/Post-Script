import HeaderFade from 'HeaderFade';

export default class Team {
  constructor() {
    const $header = document.querySelector('.main-header');
    this.headerFade = new HeaderFade($header);
  }

  init() {
    this.headerFade.init();
  }
}
