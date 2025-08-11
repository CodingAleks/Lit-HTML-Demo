import { html, render } from '../node_modules/lit-html/lit-html.js';
import { renderMainContent } from './app.js';
import { log } from './devLog.js';

log('Names component initialized');

let namesList = ['Alex', 'Bob', 'John', 'Maya', 'Lenny', 'Duck', 'Joseph'];
let deletedNamesList = [];

function namesComponent() {
    return html`${namesList.map(name => html`<li @click=${() => removeName(name)}>${name}</li>`)}`;
}

function deletedNamesComponent() {
    return html`${deletedNamesList.map(dletedName => html`<li @click=${() => addName(dletedName)}>${dletedName}</li>`)}`;
}

function removeName(name) {
    namesList = namesList.filter(n => n !== name);
    deletedNamesList.push(name);
    renderMainContent();
}

function addName(name) {
    deletedNamesList = deletedNamesList.filter(n => n !== name);
    namesList.push(name);
    renderMainContent();
}

export { namesComponent, deletedNamesComponent };