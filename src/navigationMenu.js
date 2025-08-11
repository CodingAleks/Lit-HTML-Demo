import { render, html } from "../node_modules/lit-html/lit-html.js";
import { log } from "./devLog.js";

log('Navigation component initialized');

const navigationElement = document.getElementById('navigation');
navigationElement.addEventListener('click', (e) => changePage(e));
const navigationState = {
    'Home': 'active',
    'Lit-HTML': 'inactive',
    'innerHTML': 'inactive',
    'Names': 'inactive',
    'Counter': 'inactive',
}
let activePage = 'Home';

function renderNavigation() {
    render(html`${Object.keys(navigationState).map(page => html`<p class=${navigationState[page]}>${page}</p>`)}`, navigationElement);
}

function changePage(e) {
    if (e.target.className !== 'inactive') {
        return;
    }

    navigationState[activePage] = 'inactive';
    document.getElementById(activePage).style.display = 'none';
    
    const clickedPage = e.target.textContent;
    activePage = clickedPage;
    navigationState[clickedPage] = 'active';
    renderNavigation();
    document.getElementById(clickedPage).style.display = 'block';
}

export { renderNavigation };