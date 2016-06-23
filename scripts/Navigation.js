export default class Navigation {
  constructor($openButton, $nav, openClass = 'nav-open') {
    this.$openButton = $openButton;
    this.$nav = $nav;
    this.openClass = openClass;
    this.$body = document.querySelector('body');
  }

  init() {
    this._attachEvents();
  }

  _attachEvents() {
    this.$openButton.addEventListener('click', () => {
      this.$body.classList.toggle(this.openClass);
    });

    // clicks outside of menu area should close nav
    this.$body.addEventListener('click', (evt) => {
      if(this.$body.classList.contains(this.openClass)) {
        const target = evt.target;

        if(!this.$nav.contains(target) && !this.$openButton.contains(target) && target !== this.$openButton) {
          this.$body.classList.remove(this.openClass);
        }
      }
    });
  }
}