import { html, render } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';

log('Names component initialized');

let namesList = ['Alex', 'Bob', 'John', 'Maya', 'Lenny', 'Duck', 'Joseph'];
let deletedNamesList = [];

export function renderNamesComponent() {
    const namesElement = document.getElementById('namesList');
    render(html`${namesList.map(name => html`<li @click=${() => removeName(name)}>${name}</li>`)}`, namesElement);
}

function removeName(name) {
    namesList = namesList.filter(n => n !== name);
    deletedNamesList.push(name);
    renderNamesComponent();
    renderDeletedNamesComponent();
}

function renderDeletedNamesComponent() {
    const deletedNamesElement = document.getElementById('deletedNamesList');
    render(html`${deletedNamesList.map(dletedName => html`<li @click=${() => addName(dletedName)}>${dletedName}</li>`)}`, deletedNamesElement);
}

function addName(name) {
    deletedNamesList = deletedNamesList.filter(n => n !== name);
    namesList.push(name);
    renderNamesComponent();
    renderDeletedNamesComponent();
}