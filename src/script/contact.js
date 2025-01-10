const createContactElement = () => {
	const footer = document.createElement('footer');
	const container = document.createElement('div');
	const text = document.createElement('p');
	const contact = document.createElement('p');

	footer.classList.add('footer');
	container.classList.add('footer-container');

	text.innerText = 'Visit us for a memorable dining experience.';
	contact.innerText = 'Contact: +1 (555) 123-4567 | info@ilbambino.com';

	container.append(text, contact);
	footer.appendChild(container);

	return footer;
};

export function createContact() {
	return createContactElement();
}
