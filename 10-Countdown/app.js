const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveawayEl = document.querySelector(".giveaway");
const deadlineEl = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 9, 17, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
//months
let month = futureDate.getMonth();
month = months[month];
// day
const date = futureDate.getDate();
//weekday
const weekday = weekdays[futureDate.getDay()];

giveawayEl.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

//future time in milliseconds
const futureTime = futureDate.getTime();
//console.log(futureTime);

const getRemainingTime = () => {
	//current date in milliseconds
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1hr = 60min
	// 1day = 24hr

	// values in milliseconds
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	//calculate all values
	let days = t / oneDay;
	days = Math.floor(days);
	// check full days and divide the remainder by 1hr
	let hours = Math.floor((t % oneDay) / oneHour);
	//check full hours and divide by oneMinute
	let minutes = Math.floor((t % oneHour) / oneMinute);
	//check full minutes and divide by 1000ms
	let seconds = Math.floor((t % oneMinute) / 1000);

	// set values array
	const values = [days, hours, minutes, seconds];

	//format values by adding 0 to the begining of single integers
	const format = (item) => {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	};
	items.forEach((item, index) => {
		item.innerHTML = format(values[index]);
	});
	//current time > future time|| time differece < current time
	if (t < 0) {
		clearInterval(countdown);
		deadlineEl.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
	}
};
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
