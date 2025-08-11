import { html } from '../node_modules/lit-html/lit-html.js';
import { counterComponent } from './clicker.js';
import { log } from './devLog.js';
import { deletedNamesComponent, namesComponent } from './listOfNames.js';
import { renderLitDemoComponent, renderInnerHtmlComponent } from './renderFromUserInput.js';

log('MainContent component initialized');

// Define all content templates here
const homeContent = () => html`
    <section id="Home">
        <h1>Welcome to my Lit-HTML Demo</h1>
    </section>`;
const litDemoContent = () => html`
    <section id="Lit-HTML">
        <h2>Lit-html Demo</h2>
        <input type="text" id="lit-input" placeholder="Type something to render with lit-html...">
        <button id="lit-button" class="render" @click=${renderLitDemoComponent}>Render</button>
        <div id="lit-output">
            <p>Hello, lit-html!</p>
        </div>
    </section>`;
const innerHtmlDemoContent = () => html`
    <section id="innerHTML">
        <h2>innerHTML Demo</h2>
        <input type="text" id="innerHTML-input" placeholder="Type something to render with innerHTML...">
        <button id="innerHTML-button" class="render" @click=${renderInnerHtmlComponent}>Render</button>
        <div id="innerHTML-output">
            <p>Hello, InnerHTML!</p>
        </div>
    </section>`;
const namesListContent = () => html`
    <section id="Names">
        <h2>List Component</h2>
        <div id="names">
            <h3>Names List</h3>
            <ul id="namesList">
                ${namesComponent()}
            </ul>
            <h3>Deleted Names</h3>
            <ul id="deletedNamesList">
                ${deletedNamesComponent()}
            </ul>
        </div>
    </section>`;
const counterContent = () => html`
    <section id="Counter">
        <h2>Counter Component</h2>
        <div id="clicker">
            ${counterComponent()}
        </div>
    </section>`;

export { homeContent, litDemoContent, innerHtmlDemoContent, namesListContent, counterContent };