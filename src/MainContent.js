import { html } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';

log('MainContent component initialized');

// The template for the main body of the application.
// We'll define all our sections here.
const mainContentTemplate = html`
    <section id="Home">
        <h1>Welcome to my Lit-HTML Demo</h1>
    </section>
    <section id="Lit-HTML" style="display: none">
        <h2>Lit-html Demo</h2>
        <input type="text" id="lit-input" placeholder="Type something to render with lit-html...">
        <button id="lit-button" class="render">Render</button>
        <div id="lit-output">
            <p>Hello, lit-html!</p>
        </div>
    </section>

    <section id="innerHTML" style="display: none">
        <h2>innerHTML Demo</h2>
        <input type="text" id="innerHTML-input" placeholder="Type something to render with innerHTML...">
        <button id="innerHTML-button" class="render">Render</button>
        <div id="innerHTML-output">
            <p>Hello, innerHTML!</p>
        </div>
    </section>

    <section id="Names" style="display: none">
        <h2>List Component</h2>
        <div id="names">
            <h3>Names List</h3>
            <ul id="namesList"></ul>
            <h3>Deleted Names</h3>
            <ul id="deletedNamesList"></ul>
        </div>
    </section>

    <section id="Counter" style="display: none">
        <h2>Counter Component</h2>
        <div id="clicker"></div>
    </section>
`;

export { mainContentTemplate };