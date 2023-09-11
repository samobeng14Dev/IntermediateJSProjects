const timeEl = document.getElementById("time");
const screenEl = document.getElementById("screen");
const btnNumEl = document.querySelectorAll(".btn-num");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".del");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
//
const multiplyButton = document.querySelector(".multiply");
const addButton = document.querySelector(".add");
const divideButton = document.querySelector(".divide");
const subtractButton = document.querySelector(".subtract");

const cosButton = document.querySelector(".cos-btn");
const sinButton = document.querySelector(".sin-btn");
const tanButton = document.querySelector(".tan-btn");
//inverse
const acosButton = document.querySelector(".acos-btn");
const asinButton = document.querySelector(".asin-btn");
const atanButton = document.querySelector(".atan-btn");
//log
const inButton = document.querySelector(".in-btn");

const logButton = document.querySelector(".log-btn");
//percent
const percentageButton = document.querySelector(".percent-btn");
//square cube and square root
const squareButton = document.querySelector(".square-btn");
const squareRootButton = document.querySelector(".square-root-btn");
const cubeButton = document.querySelector(".cube-btn");
// plus and minus and exponential
const plusAndMinusButton = document.querySelector(".plus-minus-btn");
const exponentialButton = document.querySelector(".expo-btn");

// format values by adding 0 to the beginning of single integers
const concatZero = (value) => {
	if (value < 10) {
		return `0${value}`;
	}
	return value;
};
const startTime = () => {
	let today = new Date();
	let hour = today.getHours();
	let minute = today.getMinutes();
	let seconds = today.getSeconds();

	// AM or PM
	let mode;

	if (hour >= 12) {
		mode = "AM";
	} else {
		mode = "PM";
	}

	// format time
	if (hour <= 12) {
		hour = hour;
	} else {
		hour = hour - 12;
	}
	// format values
	hour = concatZero(hour);
	minute = concatZero(minute);
	seconds = concatZero(seconds);

	timeEl.textContent = `${hour}:${minute}:${seconds} ${mode}`;
	setTimeout(startTime, 500);
};

window.addEventListener("DOMContentLoaded", startTime);

// screen

// display to screen
const clickToDisplay = (number) => {
	if (screenEl.value == "0") {
		screenEl.value = "";
	}

	screenEl.value += number;
};
// add an event listener
btnNumEl.forEach((btn) => {
	btn.addEventListener("click", () => {
		let values = btn.value;
		clickToDisplay(values);
	});
});
operatorButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		let values = btn.value;
		clickToDisplay(values);
	});
});

//clear screen
const clearScreen = (number) => {
	screenEl.value = number;
};
// add event listener
clearButton.addEventListener("click", () => {
	clearScreen("");
});

//delelte
const backSpace = () => {
	const space = screenEl;
	screenEl.value = space.value.slice(0, space.value.length - 1);
};
// add event listener
deleteButton.addEventListener("click", backSpace);

//calculate function
const calculate = () => {
	if (screenEl.value) {
		try {
			clearScreen(eval(screenEl.value));
		} catch (error) {
			clearScreen("Bad Expression");
		}
	}
};
equalButton.addEventListener("click", calculate);

//working with the keyboard

// Add an event listener to the document object to capture key presses
document.addEventListener("keydown", (event) => {
	// Check if the key pressed is a number or operator key
	if (event.key.match(/[0-9+\-*/.]/)) {
		clickToDisplay(event.key); // Call your clickToDisplay function with the key pressed
	} else if (event.key === "Enter") {
		calculate(); // Trigger the calculation when Enter key is pressed
	} else if (event.key === "Backspace") {
		backSpace(); // Trigger backspace when Backspace key is pressed
	} else if (event.key === "Escape") {
		clearScreen(""); // Clear the screen when Escape key is pressed
	}
});

// Add event listeners to operator buttons
operatorButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		let values = btn.value;
		clickToDisplay(values);
	});
});

// disable the default behavior of certain keys, like preventing the page from scrolling when arrow keys are pressed:
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowUp" || event.key === "ArrowDown") {
		event.preventDefault();
	}
});

// function to calculate the sine, cosine and tan of an angle to degree
//sine
const calculateSine = () => {
	screenEl.value = Math.sin((screenEl.value * Math.PI) / 180);
};
sinButton.addEventListener("click", calculateSine);
//cos
const calculateCosine = () => {
	screenEl.value = Math.cos((screenEl.value * Math.PI) / 180);
};
cosButton.addEventListener("click", calculateCosine);
//tan
const calculateTangent = () => {
	screenEl.value = Math.tan((screenEl.value * Math.PI) / 180);
};
tanButton.addEventListener("click", calculateTangent);

//function to calculate asine, acos and atan
//asine
const calculateAsine = () => {
	screenEl.value = Math.asin(screenEl.value) * (180 / Math.PI);
};

asinButton.addEventListener("click", calculateAsine);
//acos
const calculateAcos = () => {
	screenEl.value = Math.acos(screenEl.value) * (180 / Math.PI);
};
acosButton.addEventListener("click", calculateAcos);
//atan
const calculateAtan = () => {
	screenEl.value = Math.atan(screenEl.value) * (180 / Math.PI);
};
atanButton.addEventListener("click", calculateAtan);

//funtion to calculate natural logarithm and log10
//in
const calculateIn = () => {
	screenEl.value = Math.log(screenEl.value);
};
inButton.addEventListener("click", calculateIn);
//log10
const calculateLog = () => {
	screenEl.value = Math.log10(screenEl.value);
};
logButton.addEventListener("click", calculateLog);

// function for percentage
const calculatePercentage = () => {
	screenEl.value = screenEl.value / 100;
};
percentageButton.addEventListener("click", calculatePercentage);
//function for square, cube and squareRoot
//square
const calculateSquare = () => {
	screenEl.value = Math.pow(screenEl.value, 2);
};
squareButton.addEventListener("click", calculateSquare);
//cube
const calculateCube = () => {
	screenEl.value = Math.pow(screenEl.value, 3);
};
cubeButton.addEventListener("click", calculateCube);
//square root
const calculateSquareRoot = () => {
	screenEl.value = Math.sqrt(screenEl.value);
};
squareRootButton.addEventListener("click", calculateSquareRoot);
//funtion for +-
const plusAndMinus = () => {
	let x = screenEl;
	let y = x.value;
	y = y * -1;
	x.value = y;
};
plusAndMinusButton.addEventListener("click", plusAndMinus);

// exponetial function
const calculateExponential = () => {
	screenEl.value = Math.pow(10, screenEl.value);
};
exponentialButton.addEventListener("click", calculateExponential);

// // Add event listeners to corresponding buttons

// //inverse

// //square, squareRoot and cube

// // plus and minus, exponential
