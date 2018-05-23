$(document).ready(function() {

var play = document.querySelector("#play");
var timer = document.querySelector("#theTimer");
var sessionDuration = 1500;

function secToMin(n) {
	var min = Math.floor(n/60);
	var sec = n%60;
	return min+" mins : "+sec+" secs";
}

function countdown1() {
	var countdownInterval = setInterval(countdown2, 1000);
	function countdown2() {
		if (sessionDuration>0){
			sessionDuration--;
			timer.textContent = secToMin(sessionDuration);
		}
	}
}


play.addEventListener("click", countdown1)

});