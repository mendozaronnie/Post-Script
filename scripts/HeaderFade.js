import { throttle } from 'scripts/utils.js';

export default class HeaderFade {
  constructor($header, solidClass = 'solid', fadeScrollPos = 100) {
    this.$header = $header;
    this.solidClass = solidClass;
    this.fadeScrollPos = fadeScrollPos;
    this.isCurrentlySolid = false;
  }

  init() {
    this._attachEvents();
  }

  _attachEvents() {
    window.addEventListener('scroll', throttle(() => {
      const scrollPos = window.pageYOffset;

      if (scrollPos > this.fadeScrollPos !== this.isCurrentlySolid) {
        this.$header.classList.toggle(this.solidClass);
        this.isCurrentlySolid = !this.isCurrentlySolid;
      }
    }, 200));
  }
}