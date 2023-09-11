const infotextEl = document.querySelector(".info-text");
const inputEl = document.querySelector(".input");
const wordEl = document.querySelector(".word");
const audioEl = document.querySelector(".audio");
const phoneticEl = document.querySelector(".phonetic");
const definitionBtn = document.querySelector(".definition-btn");
const synonymBtn = document.querySelector(".synonym-btn");
const exampleBtn = document.querySelector(".example-btn");

const meaningContainerEl = document.querySelector(".meaning-container");
const meaningTitle = document.querySelector(".meaning-title");
const definitionEl = document.querySelector(".definition");
const synonymEl = document.querySelector(".synonym");
const exampleEl = document.querySelector(".example");

const fetchWord = async (word) => {
	try {
		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		const response = await fetch(url);
		const data = await response.json();

		// console.log(data);
		if (data.title) {
			meaningContainerEl.style.display = "block";
			wordEl.textContent = word;
			meaningTitle.textContent = word;
			phoneticEl.textContent = "none";
			definitionEl.textContent = "word not found";
			synonymEl.textContent = "N/A";
			exampleEl.textContent = "N/A";
		} else {
			meaningContainerEl.style.display = "block";
			wordEl.textContent = word;
			audioEl.src = data[0].phonetics[1].audio;
			meaningTitle.textContent = word;
			phoneticEl.textContent = data[0].phonetic;
			definitionEl.textContent = data[0].meanings[0].definitions[0].definition;
			synonymEl.textContent = data[0].meanings[0].definitions[0].synonyms;
			exampleEl.textContent = data[0].meanings[0].definitions[0].example;
		}
	} catch (error) {
		infotextEl.style.display = "block";
		infotextEl.classList.add("show-info-text");
		// console.log(error);
	}
};

const btnFunction = () => {
	const word = inputEl.value;
	fetchWord(word);
};

inputEl.addEventListener("keyup", (e) => {
	if (e.currentTarget.value && e.key == "Enter") {
		fetchWord(e.currentTarget.value);
	}
});

synonymBtn.addEventListener("click", btnFunction);

definitionBtn.addEventListener("click", btnFunction);

exampleBtn.addEventListener("click", btnFunction);

// const defFunction = (data) => {
// 	// This code will iterate over each meaning, and within each meaning,
// 	//  it will iterate over the definitions and
// 	//log each definition along with its corresponding index. The output will be:

// 	const meanings = data[0].meanings;
// 	meanings.forEach((meaning) => {
// 		const definitions = meaning.definitions;
// 		definitions.forEach((definition, index) => {
// 			console.log(`Definition ${index + 1}: ${definition.definition}`);
// 		});
// 	});
// };
// const synonymFunc = () => {
// 	// This code retrieves the synonyms array from the first meaning
// 	//  and checks if any synonyms are available. If there are no synonyms, it logs "No synonyms found." Otherwise, it iterates over the synonyms array and logs each synonym along with its corresponding index.
// 	// The output will be:
// 	const synonyms = data[0].meanings[0].synonyms;
// 	if (synonyms.length === 0) {
// 		console.log("No synonyms found.");
// 	} else {
// 		synonyms.forEach((synonym, index) => {
// 			console.log(`Synonym ${index + 1}: ${synonym}`);
// 		});
// 	}
// };

// const exampleFunction = () => {
// 	// This code retrieves the examples from the first meaning's definitions
// 	//  and checks if any examples are available.
// 	//   If there are no examples, it logs "No examples found." Otherwise, it iterates over the examples array
// 	// and logs each example along with its corresponding index. The output will be:

// 	const examples = apiResponse[0].meanings[0].definitions.map(
// 		(definition) => definition.example
// 	);
// 	if (examples.length === 0) {
// 		console.log("No examples found.");
// 	} else {
// 		examples.forEach((example, index) => {
// 			console.log(`Example ${index + 1}: ${example}`);
// 		});
// 	}
// };
