const btnEl = document.querySelector(".btn");
const scoreEl = document.querySelector(".score");
const scoreValueEl = document.querySelector(".score-value");
const timeRemainingEl = document.querySelector(".time-remaining");
const counterEl = document.querySelector(".counter");
const gameOverEl = document.querySelector(".game-over");
const responseEl = document.querySelector(".response");
const questionContainerEl = document.querySelector(".question-container");

let playing = false;
let score;
let action;
let timeRemaining;
let correctAnswer;

btnEl.addEventListener("click", () => {
	if (playing) {
		location.reload();
	} else {
		playing = true;
		score = 0;
		scoreValueEl.textContent = score;
		timeRemainingEl.style.visibility = "visible";

		timeRemaining = 60;
		counterEl.textContent = timeRemaining;
		btnEl.textContent = "Reset Game";
		startCountDown();

		generateQA();
	}
});

// Clicking an answer
for (let i = 1; i < 5; i++) {
	const boxEl = document.getElementById("box" + i);

	boxEl.addEventListener("click", (event) => {
		if (playing) {
			if (event.target.textContent == correctAnswer) {
				score++;
				scoreValueEl.textContent = score;
				responseEl.style.display = "block";
				responseEl.textContent = "Correct";
				responseEl.style.backgroundColor = "green";
				setTimeout(() => {
					responseEl.style.display = "none";
				}, 1000);
				generateQA();
			} else {
				responseEl.style.display = "block";
				responseEl.textContent = "Wrong";
				responseEl.style.backgroundColor = "red";
				setTimeout(() => {
					responseEl.style.display = "none";
					responseEl.textContent = "";
				}, 1000);
			}
		}
	});
}

// Functions
const startCountDown = () => {
	action = setInterval(() => {
		timeRemaining -= 1;
		counterEl.textContent = timeRemaining;
		if (timeRemaining == 0) {
			stopCountDown();
			gameOverEl.style.display = "block";
			gameOverEl.innerHTML = `<h1>Game Over!</h1>
        <p>Your score is ${score}</p>`;
			timeRemainingEl.style.visibility = "hidden";
		}
	}, 1000);
};

const stopCountDown = () => {
	clearInterval(action);
};

const generateQA = () => {
	let x = 1 + Math.round(9 * Math.random());
	let y = 1 + Math.round(9 * Math.random());
	correctAnswer = x * y;
	questionContainerEl.textContent = `${x} X ${y}`;
	//place correct answer in one of the 4 boxes
	let correctPosition = 1 + Math.round(3 * Math.random());
	const boxEl = document.getElementById("box" + correctPosition);
	boxEl.textContent = correctAnswer;
	//
	let answers = [correctAnswer];
	for (let i = 1; i < 5; i++) {
		if (i !== correctPosition) {
			let wrongAnswer;
			do {
				wrongAnswer =
					1 +
					Math.round(9 * Math.random()) * (1 + Math.round(9 * Math.random()));
			} while (answers.indexOf(wrongAnswer) > -1);
			const boxEl = document.getElementById("box" + i);
			boxEl.textContent = wrongAnswer;
			answers.push(wrongAnswer);
		}
	}
};
