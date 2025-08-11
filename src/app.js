import { render } from '../node_modules/lit-html/lit-html.js';
import { log } from './devLog.js';
import { counterContent, homeContent, innerHtmlDemoContent, litDemoContent, namesListContent } from './MainContent.js';
import { renderNavigation, setActivePage } from './navigationMenu.js';

// A simple router object to map page names to templates
const router = {
    'Home': homeContent,
    'Lit-HTML': litDemoContent,
    'InnerHTML': innerHtmlDemoContent,
    'Names': namesListContent,
    'Counter': counterContent,
};

const mainContentElement = document.getElementById('main-content');
let currentPage = 'Home'; // Initial page

export function renderMainContent() {
    render(router[currentPage](), mainContentElement);
}

// Listen for the custom event from the navigation menu
document.getElementById('navigation').addEventListener('page-changed', (e) => {
    const newPage = e.detail.newPage;
    currentPage = newPage;
    setActivePage(newPage); // Tell the navigation component to update its state
    renderMainContent(); // Re-render the main content area
});

// Initial renders
renderNavigation();
renderMainContent();