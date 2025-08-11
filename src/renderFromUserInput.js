import { html, render } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';

log('User Input component initialized');

function renderLitDemoComponent() {
    log('Rendering user input');
    const litElement = document.getElementById('lit-output');
    const message = document.getElementById('lit-input').value;
    const template = (message) => (html`<h1>Hello, ${message}!</h1>`);
    render(template(message), litElement);
}

function renderInnerHtmlComponent() {
    log('Rendering user input');

    const message = document.getElementById('innerHTML-input').value;
    // If user inputs:
    // Winner! You have won $100 <button onclick="alert('You have been Hacked! \nCall Microsoft customer support at +1(888) 633-2934 (Toll Free)')">Claim $100</button>
    // the button will work and the JS will be executed
    document.getElementById('innerHTML-output').innerHTML = `<h1>Hello, ${message}!</h1>`;
}

export { renderLitDemoComponent, renderInnerHtmlComponent }