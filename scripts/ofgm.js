import HeaderFade from 'HeaderFade';

export default class OFGM {
  constructor() {
    const $header = document.querySelector('.main-header');
    this.headerFade = new HeaderFade($header);
  }

  init() {
    this.headerFade.init();
  }
}

$(document).ready(function() {
    $('.fancybox').fancybox();
});