const createMenuSection = () => {
	const section = document.createElement('section');
	const title = document.createElement('h2');
	const menuList = document.createElement('ul');
	const menuItems = [
		'Starter: Carpaccio',
		'Main: Spaghetti Carbonara',
		'Dessert: Homemade Tiramisu',
	];

	section.classList.add('menu-section');
	title.innerText = 'Menu';

	menuItems.forEach(item => {
		const li = document.createElement('li');
		li.innerText = item;
		menuList.appendChild(li);
	});

	section.append(title, menuList);
	return section;
};

export function createMenu() {
	return createMenuSection();
}
