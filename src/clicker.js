import { html } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';
import { renderMainContent } from './app.js';

log('Clicker component initialized');

let count = 0;

function incrementCount() {
    count++;
    renderMainContent();
}

function counterComponent() {
    return html`
        <div class="component" id="counterDiv">
            ${count === 0
            ? html`
                    <p>Start clicking the button</p>
                    <button @click=${incrementCount}>Increment</button>
                  `
            : html`
                    <p>Click counts: ${count}</p>
                    <button @click=${incrementCount}>Increment</button>
                  `}
        </div>
    `;
}

export { counterComponent };