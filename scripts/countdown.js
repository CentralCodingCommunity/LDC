// Call the functions
countDownTimer('05/29/2015 2:00 PM', 'seniors');
countDownTimer('06/09/2015 2:00 PM', 'others');

// Define the countdown function
function countDownTimer(dt, id) {
	// Define the goal date
	var end = new Date(dt);

	// Define each in milliseconds
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var _week = _day * 7
	// Interval variable
	var timer;

	// Create another function to show the time remaining
	function showRemaining() {
		// Get the current date
		var now = new Date();
		// Get the difference
		var distance = end - now;
		// If the date has passed
		if(distance <= 0) {
			// Clear the timer 
			clearInterval(timer);
			// Print some text
			if(id == 'seniors') {
				document.getElementById(id).innerHTML = 'GRADUATION!!!';
			} else {
				document.getElementById(id).innerHTML = 'SUMMER!!!';
			}
			// Don't continue with the rest of the function
			return;
		}

		// Obtain the number for each of the following
		var weeks = Math.floor(distance / _week);
		var days = Math.floor((distance % _week) / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		var timer = "";

		// Print the information on the page
		if(weeks != 0) timer += weeks + ' weeks, ';
		if(weeks != 0 || days != 0) timer += days + ' days, ';
		if(weeks != 0 || days != 0 || hours != 0) timer += hours + ' hrs, ';
		if(weeks != 0 || days != 0 || hours != 0 || minutes != 0) timer += minutes + ' min, ';
		if(weeks != 0 || days != 0 || hours != 0 || minutes != 0 || seconds != 0) timer += seconds + ' sec';

		document.getElementById(id).innerHTML = timer;
	};
	// Refresh every second
	timer = setInterval(showRemaining, 1000);
};
