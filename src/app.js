import { render } from '../node_modules/lit-html/lit-html.js';
import { renderNavigation } from './navigationMenu.js';
import { renderTestInputToElement } from './renderFromUserInput.js';
import { renderNamesComponent } from './listOfNames.js';
import { renderCounterComponent } from './clicker.js';
import { log } from './devLog.js';
import { mainContentTemplate } from './MainContent.js'; // Import our new template

// Get the main container element from index.html
const mainContentElement = document.getElementById('main-content');

// Render the main content template into the main container
render(mainContentTemplate, mainContentElement);

// Now that the elements exist in the DOM, we can run our component logic.
renderNavigation();
renderTestInputToElement();
renderNamesComponent();
renderCounterComponent();

log('App initialized');