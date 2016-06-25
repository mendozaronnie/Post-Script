import Navigation from 'scripts/Navigation.js';
import HeaderFade from 'scripts/HeaderFade.js';

// global dependencies
const $header = document.querySelector('.main-header');
const $hamburger = document.querySelector('.hamburger-button');
const $nav = document.querySelector('.main-nav');
const headerFade = new HeaderFade($header);
const navigation = new Navigation($hamburger, $nav);

console.log('hello');

headerFade.init();
navigation.init();

// page specific dependencies
const deps = {
  index: [],
  mission: []
};
const jsModules = document.querySelector('body').dataset.js;

if (jsModules) {
  jsModules.split(' ').forEach((pageName) => {
    deps[pageName].forEach((Module) => {
      new Module().init();
    });
  });
}
