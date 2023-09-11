const questions = [
	{
		number: "1",
		question: "HTML stands for?",
		answer: "Hyper Text Markup Language",
		option: [
			"Hyper Text Preprocessor",
			"Hyper Text Markup Laguage",
			"Hyper Text Multiple Language",
			"Hyper Text Markup Language",
		],
	},
	{
		number: "2",
		question: "CSS stands for?",
		answer: "Cascading Style Sheet",
		option: [
			"Cascading Style Sheet",
			"Cascading Style Sheat",
			"Cascading Slide Sheet",
			"Cascading Slide Sheat",
		],
	},
	{
		number: "3",
		question: "PHP stands for?",
		answer: "Hyper Text Preprocessor",
		option: [
			"Hyper Text Preprocessor",
			"Hyper Text Processor",
			"Program Hyper Processor",
			"Program Hyper Preprocessor",
		],
	},
	{
		number: "4",
		question: "IDE stands for?",
		answer: "Integrated Development Environment",
		option: [
			"Integrated Development Environment",
			"Integrated Design Environment",
			"Integrated Data Environment",
			"Integrated Details Environment",
		],
	},
	{
		number: "5",
		question: "DOM stands?",
		answer: "Document Object Model",
		option: [
			"Document Object Mode",
			"Document Object Model",
			"Dynamic Object Model",
			"Dynamic Object Mode",
		],
	},
];
const rulesEl = document.querySelector(".container");
const startButton = document.querySelector(".start-btn");
const continueButton = document.querySelector(".continue-btn");
const exitButton = document.querySelector(".exit-btn");
const questionContainer = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const optionEl = document.querySelector(".option-container");
const footerText = document.querySelector(".footer-text");
const nextQuestionButton = document.querySelector(".next-question-btn");
const replayButton = document.querySelector(".replay-btn");
const quitBuuton = document.querySelector(".quit-quiz");
const timerSecondsEl = document.querySelector(".timer-sec");
const timeLine = document.querySelector(".time-line");
const congratsEl = document.querySelector(".congrats-container ");
const congratInfoEl = document.querySelector(".congrat-info");

// getting questions and options and answers from questions array
let questionCount = 0;
let questionNumber = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
const displayQuestions = (index) => {
	let questionTag = `<h1>${questions[index].number}.${questions[index].question}</h1>`;
	let optionTag = `
	<div class="option-list">
	<span>${questions[index].option[0]}</span>
	</div>
	<div class="option-list">
	<span>${questions[index].option[1]}</span>
	</div>
	<div class="option-list">
	<span>${questions[index].option[2]}</span>
	</div>
	<div class="option-list">
	<span>${questions[index].option[3]}</span>
	</div>
	`;
	questionEl.innerHTML = questionTag;
	optionEl.innerHTML = optionTag;
	const optionList = optionEl.querySelectorAll(".option-list");
	optionList.forEach((option) => {
		option.addEventListener("click", () => optionSelected(option));
	});
	// console.log(option);
	// for (let i = 0; i < option.length; i++) {
	// 	option[i].addEventListener("click", () => optionSelected(option[i]));
	// }
};
//check icons
let checkIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let timesIcon = `<div class="icon times"><i class="fas fa-times"></i></div>`;

const optionSelected = (selectedOption) => {
	clearInterval(counter);
	clearInterval(counterLine);
	// Disable all options
	const allOptions = optionEl.children;
	for (let i = 0; i < allOptions.length; i++) {
		allOptions[i].classList.add("disabled");
	}
	nextQuestionButton.style.display = "block";

	// Get the text content of the user-selected option and the correct answer
	const userAnswer = selectedOption.textContent.trim();
	const correctAnswer = questions[questionCount].answer.trim();

	if (userAnswer === correctAnswer) {
		// If the user's answer is correct, add the "correct" class to the selected option
		selectedOption.classList.add("correct");
		selectedOption.insertAdjacentHTML("beforeend", checkIcon);
	} else {
		// If the user's answer is incorrect, add the "incorrect" class to the selected option
		selectedOption.classList.add("incorrect");
		selectedOption.insertAdjacentHTML("beforeend", timesIcon);

		// Automatically select the correct answer
		for (let i = 0; i < allOptions.length; i++) {
			if (allOptions[i].textContent.trim() === correctAnswer) {
				// Add the "correct" class to the correct answer option
				allOptions[i].classList.add("correct");
				break; // Stop after marking the correct answer
			}
		}
	}
};

const questionCounter = (index) => {
	let questionCountTag = `<span>${index} of ${questions.length} Questions</span>`;
	footerText.innerHTML = questionCountTag;
};
const startTimer = (time) => {
	counter = setInterval(() => {
		timerSecondsEl.textContent = time;
		time--;
		if (time < 9) {
			let addZero = timerSecondsEl.textContent;
			timerSecondsEl.textContent = "0" + addZero;
		}
		if (time < 0) {
			clearInterval(counter);
			timerSecondsEl.textContent = "00";
		}
	}, 1000);
};
const startTimerLine = (time) => {
	counterLine = setInterval(() => {
		time += 1;
		//calculates the percentage of completion of the progress barbased on the current time and a total time of 15 seconds.
		const progressPercentage = (time / 15) * 100;
		timeLine.style.width = progressPercentage + "%";
		if (progressPercentage >= 100) {
			clearInterval(counterLine);
		}
	}, 1000);
};

const displayResult = () => {
	questionContainer.style.display = "none"; // Hide the quiz container
	rulesEl.style.display = "none";
	congratsEl.style.display = "block"; // Display the congratulatory container
};

startButton.addEventListener("click", () => {
	rulesEl.style.display = "block";
	startButton.style.display = "none";
	nextQuestionButton.style.display = "none";
});
continueButton.addEventListener("click", () => {
	questionContainer.style.display = "block";
	rulesEl.style.display = "none";
	displayQuestions(questionCount);
	startTimer(15);
	startTimerLine(0);
});
nextQuestionButton.addEventListener("click", () => {
	if (questionCount < questions.length - 1) {
		questionCount++;
		questionNumber++;
		displayQuestions(questionCount);
		questionCounter(questionNumber);
		clearInterval(counter);
		startTimer(timeValue);
		clearInterval(counterLine);
		timeLine.style.width = "0"; // Reset the progress bar
		startTimerLine(widthValue);
		nextQuestionButton.style.display = "none";
	} else {
		// console.log("quiz completed");
		displayResult();
	}
});

exitButton.addEventListener("click", () => {
	rulesEl.style.display = "none";
	startButton.style.display = "block";
});
