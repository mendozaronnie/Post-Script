import Index from 'scripts/index.js';

const deps = {
  index: Index
};


const jsModules = document.querySelector('body').dataset.js;
if (jsModules) {
  jsModules.split(' ').forEach((module) => {
    const moduleToInit = new deps[module]();
    moduleToInit.init();
  });
}
