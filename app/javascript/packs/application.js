import "bootstrap";

import { initAutoResizeTextArea } from '../components/initAutoResizeTextArea';
import { initPokeSuggestions } from '../components/initPokeSuggestions';
import { initPokesIndexTabs } from '../components/initPokesIndexTabs';
import { initNavbarScroll } from '../components/initNavbarScroll';
import { updateLastSeenPokeOnExit } from '../components/updateLastSeenPokeOnExit';

initNavbarScroll();
initPokeSuggestions();
initAutoResizeTextArea();
initPokesIndexTabs();
updateLastSeenPokeOnExit();


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  console.log(e);

  document.querySelector('body').insertAdjacentHTML('beforeend', `
    <button class="btn btn-success">Install</button>
    `)

  deferredPrompt = e;

  document.querySelector('button.btn-success').addEventListener('click', (event) => {
    deferredPrompt.prompt();
  });
});



