import Index from 'scripts/index.js';
import Mission from 'scripts/mission.js';

const deps = {
  index: Index,
  mission: Mission
};

const jsModules = document.querySelector('body').dataset.js;
if (jsModules) {
  jsModules.split(' ').forEach((module) => {
    const moduleToInit = new deps[module]();
    moduleToInit.init();
  });
}
