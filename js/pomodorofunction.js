$(document).ready(function() {

var play = document.querySelector("#play");
var mode = document.querySelector("#sessionOrBreak");
var timer = document.querySelector("#theTimer");
var sessionDuration = 1500;
var breakDuration = 300;

function secToMin(n) {
	var min = Math.floor(n/60);
	var sec = n%60;
	return min+" mins : "+sec+" secs";
}

function countdownSession() {
	mode.textContent = "Session Time...   Work!"
	sessionDuration--;
	timer.textContent = secToMin(sessionDuration);
}

function countdownBreak() {
	mode.textContent = "Break Time...   Take a Break!"
	breakDuration--;
	timer.textContent = secToMin(breakDuration);
}

function together() {
	if (sessionDuration>0) {
		countdownSession();
	}
	else if (sessionDuration==0 && breakDuration>0) {
		countdownBreak();
	}
	else if (sessionDuration==0 && breakDuration==0) {
		sessionDuration=1500;
		breakDuration=300;
		together();
	}
}

function start(){
	timerInterval = setInterval(together, 1000);
}

play.addEventListener("click", start)

});