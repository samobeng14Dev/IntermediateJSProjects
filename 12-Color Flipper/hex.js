const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");
const messageEl = document.querySelector(".message");

const getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};

const generateColor = () => {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}
	colorEl.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
};

//display copy to clipboard message
const showMessage = (message) => {
	messageEl.textContent = message;
	setTimeout(() => {
		messageEl.textContent = "";
	}, 3000);
};
// copy to clipboard function
const copyToClipboard = (text) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			const message = `Color "${text}" copied to clipboard`;
			showMessage(message);
		})
		.catch((error) => {
			const message = `Failed to copy "${text}" to clipboard ${error}`;
			showMessage(message);
		});
};
btnEl.addEventListener("click", generateColor);
colorEl.addEventListener("click", () => {
	const colorText = colorEl.textContent;
	copyToClipboard(colorText);
});
