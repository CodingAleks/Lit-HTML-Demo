import { html, render } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';

log('User Input component initialized');

export function renderTestInputToElement() {
    log('Rendering user input component');
    const litElement = document.getElementById('lit-output');
    const innerHtmlElement = document.getElementById('innerHTML-output');
    const litButton = document.getElementById('lit-button');
    const innerHtmlButton = document.getElementById('innerHTML-button');
    litButton.addEventListener('click', renderLit);
    innerHtmlButton.addEventListener('click', renderInnerHTML);

    function renderLit() {
        const message = document.getElementById('lit-input').value;
        const template = (message) => (html`<h1>Hello, ${message}!</h1>`);
        render(template(message), litElement);
    }

    function renderInnerHTML() {
        const message = document.getElementById('innerHTML-input').value;
        // If user inputs <button id="btn" onclick="alert('XSS Attack')">Attack</button>
        // the button will work and the JS will be executed
        innerHtmlElement.innerHTML = `<h1>Hello, ${message}!</h1>`;
    }
};