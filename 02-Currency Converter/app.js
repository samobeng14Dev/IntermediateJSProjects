const currencyBtn = document.querySelector(".currency-btn");
const exchangeRateBtn = document.querySelector(".exchange-rate-btn");
const exchangeRateInfoEl = document.querySelector(".exchange-rate-info");

const inputEl = document.querySelector(".input");
const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");

const conversionRateEl = document.querySelector(".conversion-rate");
const updatedEl = document.querySelector(".updated");
const invertCurrencyBtn = document.querySelector(".invert-currency");

// Dynamically populate currency options
const populateCurrencyOptions = async () => {
	const url =
		"https://v6.exchangerate-api.com/v6/f6f7790e14ce41d6af3cf4e2/latest/GHS";
	const response = await fetch(url);
	const data = await response.json();

	// Get the currency rates object from the API response
	const currencyRates = data.conversion_rates;

	// Iterate over the currency rates and populate the select elements
	for (const currencyCode in currencyRates) {
		// Create option elements
		const option1 = document.createElement("option");
		const option2 = document.createElement("option");

		// Set the value and text for the options
		option1.value = currencyCode;
		option1.textContent = currencyCode;
		option2.value = currencyCode;
		option2.textContent = currencyCode;

		// Check if currencyCode is "USD" and set it as selected
		if (currencyCode === "USD") {
			option1.selected = true;
		}

		// Append the options to the select elements
		currencyFirstEl.appendChild(option1);
		currencySecondEl.appendChild(option2);
	}
};

populateCurrencyOptions();

const updateRate = async () => {
	const url = `https://v6.exchangerate-api.com/v6/f6f7790e14ce41d6af3cf4e2/latest/${currencyFirstEl.value}`;
	const response = await fetch(url);
	const data = await response.json();
	const rate = data.conversion_rates[currencySecondEl.value];
	conversionRateEl.textContent = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

	exchangeRateInfoEl.textContent = `${inputEl.value}${
		currencyFirstEl.value
	} = ${inputEl.value * rate} ${currencySecondEl.value}`;
	const timeLastUpdateUtc = data.time_last_update_utc;
	updatedEl.textContent = timeLastUpdateUtc;
};

//invert currency button
invertCurrencyBtn.addEventListener("click", () => {
	// Swap the selected currencies
	const temp = currencyFirstEl.value;
	currencyFirstEl.value = currencySecondEl.value;
	currencySecondEl.value = temp;

	// Update the conversion rate and display the updated values
	updateRate();
});

inputEl.addEventListener("input", updateRate);
currencySecondEl.addEventListener("change", updateRate);
currencyBtn.addEventListener("click", updateRate);

// display conversion rates when btn is clicked
exchangeRateBtn.addEventListener("click", async () => {
	const url = `https://v6.exchangerate-api.com/v6/f6f7790e14ce41d6af3cf4e2/latest/${currencyFirstEl.value}`;
	const response = await fetch(url);
	const data = await response.json();
	const rates = data.conversion_rates;
	//iterate through rates and display conversions rates
	let conversionRatesHTML = "";
	for (const currencyCode in rates) {
		conversionRatesHTML += `<li>1 ${currencyFirstEl.value} = ${rates[currencyCode]} ${currencyCode}</li>`;
	}

	exchangeRateInfoEl.innerHTML = `<ul class="rate-style">${conversionRatesHTML}</ul>`;
});
