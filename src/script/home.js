import restaurantImage from '../../img/restaurant.jpg';

// Create header elements
const createHeaderElement = () => {
	const headerElement = document.createElement('header');
	const titleElement = document.createElement('h1');

	titleElement.innerText = 'Welcome to Il Bambino';
	headerElement.appendChild(titleElement);

	return headerElement;
};

const createAboutSection = () => {
	const section = document.createElement('section');
	const title = document.createElement('h2');
	const restaurantImg = document.createElement('img');
	const description = document.createElement('p');

	section.classList.add('about-section');
	title.innerText = 'Il Bambino: Where Flavor Meets Family';
	restaurantImg.src = restaurantImage;
	restaurantImg.alt = 'Our Restaurant';
	description.innerText =
		'Experience the finest dishes crafted with the freshest ingredients.';

	section.append(title, restaurantImg, description);
	return section;
};

const createTimeElement = () => {
	const container = document.createElement('section');
	const title = document.createElement('h3');
	const hourList = document.createElement('ul');
	const hourItems = [
		'Monday: 11am - 9pm',
		'Tuesday: 11am - 9pm',
		'Wednesday: 11am - 9pm',
		'Thursday: 11am - 9pm',
		'Friday: 11am - 10pm',
		'Saturday: 11am - 10pm',
		'Sunday: closed',
	];

	container.classList.add('container');

	title.innerText = 'Hours';
	hourItems.forEach(item => {
		const li = document.createElement('li');
		li.innerText = item;
		hourList.appendChild(li);
	});

	container.append(title, hourList);

	return container;
};
/**
 * Creates and returns the complete home page structure
 * @returns {DocumentFragment} Fragment containing all page elements
 */
export function createHome() {
	const fragment = document.createDocumentFragment();

	const header = createHeaderElement();
	const main = document.createElement('main');

	main.append(createAboutSection(), createTimeElement());
	fragment.append(header, main);

	return fragment;
}
