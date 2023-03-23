const pullThing = document.getElementById('leftDiv');
const button = document.getElementById('coisaQuePixa');

let pulled = false;
let canExec = true;

function show() {
  pullThing.style.setProperty('left', '0');
  pullThing.style.setProperty('animation-name', 'show');
}

function hide() {
  pullThing.style.setProperty('left', '-110px');
  pullThing.style.setProperty('animation-name', 'hide');
}

button.addEventListener('click', (ev) => {
  pulled = !pulled;

  if (pulled) {
    show();
  } else {
    hide();
  }
});