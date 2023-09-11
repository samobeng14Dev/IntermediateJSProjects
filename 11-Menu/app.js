const menu = [
	{
		id: 1,
		title: "hausa kooko",
		category: "breakfast",
		price: 15.99,
		img: "./images/breakfast-1.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore doloremque, aut laudantium eius impedit sit deleniti rem nostrum itaque nam. `,
	},
	{
		id: 2,
		title: "red red",
		category: "lunch",
		price: 13.99,
		img: "./images/red-red.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt porro ipsam
            excepturi vitae
            officiis quaerat ad eligendi dignissimos laborum `,
	},
	{
		id: 3,
		title: "pineapple juice",
		category: "shakes",
		price: 6.99,
		img: "./images/pineapple-juice.jpg",
		desc: ` Inventore doloremque, aut laudantium eius impedit sit deleniti rem nostrum itaque nam.`,
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 20.99,
		img: "./images/breakfast-2.jpg",
		desc: `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.Cupcake lemon drops bear claw gummies. `,
	},
	{
		id: 5,
		title: "waakye",
		category: "lunch",
		price: 22.99,
		img: "./images/waakye-lunch.jpg",
		desc: `Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop.`,
	},
	{
		id: 6,
		title: "baobab juice",
		category: "shakes",
		price: 18.99,
		img: "./images/baobab-juice.jpg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "rice poridge",
		category: "breakfast",
		price: 8.99,
		img: "./images/breakfast-3.jpg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "jollof",
		category: "lunch",
		price: 12.99,
		img: "./images/jollof-lunch.jpg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "ginger juice",
		category: "shakes",
		price: 16.99,
		img: "./images/ginger-juice.jpg",
		desc: `Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop.`,
	},
];

const sectionCenterEl = document.querySelector(".section-center");
const containerEl = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", () => {
	displayItems(menu);
	displayMenuButtons();
});

const displayItems = (menuItems) => {
	let displayMenu = menuItems.map((item) => {
		return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">GH${item.price}</h4> 
          </header>
          <p class="item-text"> ${item.desc}</p>
        </div>
      </article>`;
	});
	displayMenu = displayMenu.join("");
	sectionCenterEl.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
	//handle newly added categories
	const categories = menu.reduce(
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		["all"]
	);
	//create buttons by looping through categories in the menu array objects
	const categoriesBtnEl = categories
		.map((category) => {
			return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
		})
		.join("");

	containerEl.innerHTML = categoriesBtnEl;
	// creating filter buttons
	const filterBtnEl = document.querySelectorAll(".filter-btn");
	filterBtnEl.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter((menuItem) => {
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			// console.log(menuCategory);
			// filter items using "all" which is not included in the menu array categories
			if (category === "all") {
				displayItems(menu);
			} else {
				displayItems(menuCategory);
			}
		});
	});

	// const categories = menu.reduce(
	// 	(values, item) => {
	// 		return values.includes(item.category)
	// 			? values
	// 			: [...values, item.category];
	// 	},
	// 	["all"]
	// );
};
