import { render, html } from "../node_modules/lit-html/lit-html.js";
import { log } from "./devLog.js";

log('Navigation component initialized');

const navigationElement = document.getElementById('navigation');
// Let's attach the event listener to the navigation element.
// We will dispatch a custom event when a page is changed.
navigationElement.addEventListener('click', (e) => {
    // Only proceed if the clicked element is a navigation link
    if (e.target.tagName !== 'P' || e.target.className === 'active') {
        return;
    }

    const clickedPage = e.target.textContent;

    // Dispatch a custom event with the new page name
    navigationElement.dispatchEvent(new CustomEvent('page-changed', {
        bubbles: true, // Allow the event to bubble up to the document
        detail: { newPage: clickedPage }
    }));
});

// The state is still managed here, but we'll update it based on the event.
const navigationState = {
    'Home': 'active',
    'Lit-HTML': 'inactive',
    'InnerHTML': 'inactive',
    'Names': 'inactive',
    'Counter': 'inactive',
}
let activePage = 'Home';

function renderNavigation() {
    render(html`${Object.keys(navigationState).map(page => html`<p class=${navigationState[page]}>${page}</p>`)}`, navigationElement);
}

function setActivePage(page) {
    if (navigationState[page]) {
        navigationState[activePage] = 'inactive';
        activePage = page;
        navigationState[activePage] = 'active';
        renderNavigation(); // Re-render the navigation menu
    }
}

export { renderNavigation, setActivePage };