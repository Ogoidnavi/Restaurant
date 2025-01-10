import './style/normalize.css';
import './style/styles.css';
import { createHome } from './script/home.js';
import { createMenu } from './script/menu.js';
import { createContact } from './script/contact.js';

const content = document.getElementById('content');
const tabs = document.querySelectorAll('nav button');

function setContent(component) {
	content.replaceChildren();
	content.appendChild(component);
}

// Set initial page
setContent(createHome());

// Event listeners for navigation
tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		switch (tab.className) {
			case 'home':
				setContent(createHome());
				break;
			case 'menu':
				setContent(createMenu());
				break;
			case 'contact':
				setContent(createContact());
				break;
			default:
				console.error('Unknown tab');
		}
	});
});
