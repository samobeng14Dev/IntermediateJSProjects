const colors = [
	"green",
	"red",
	"rgba(133,122,200)",
	"#f15025",
	"yellow",
	"black",
	"blue",
	"white",
	"orange",
	"indigo",
];

const colorEl = document.querySelector(".color");
const btnEl = document.querySelector("#btn");
const messageEl = document.querySelector("#message");

const generateColor = () => {
	const randomColor = getRandomNumber();
	const bgColor = colors[randomColor];

	document.body.style.backgroundColor = bgColor;
	colorEl.textContent = bgColor;
};

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};
//show copeid to clipboard message
const showMessage = (message) => {
	messageEl.textContent = message;
	setTimeout(() => {
		messageEl.textContent = "";
	}, 3000);
};

const copyToClipboard = (text) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			const message = `Color "${text}" copied to clipboard!`;
			showMessage(message);
		})
		.catch((error) => {
			const message = `Failed to copy text to clipboard: ${error}`;
			console.error(message);
			showMessage(message);
		});
};

btnEl.addEventListener("click", generateColor);
btnEl.addEventListener("mouseenter", () => {
	if (colorEl.textContent === "white") {
		btnEl.style.color = "white";
	}
});

btnEl.addEventListener("mouseleave", () => {
	if (colorEl.textContent === "white") {
		btnEl.style.color = "black";
	}
});

colorEl.addEventListener("click", () => {
	const colorText = colorEl.textContent;
	copyToClipboard(colorText);
});
