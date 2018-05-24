$(document).ready(function() {

var sessionShow = document.querySelector("#sessionShow");
var sessionDown = document.querySelector("#sessionDown");
var sessionUp = document.querySelector("#sessionUp");
var breakShow = document.querySelector("#breakShow");
var breakDown = document.querySelector("#breakDown");
var breakUp = document.querySelector("#breakUp");

var sessionDuration = 1500;
var userEditedSessionDuration = sessionDuration;
var breakDuration = 300;
var userEditedBreakDuration = breakDuration;


var play = document.querySelector("#play");
var refresh = document.querySelector("#refresh");
var pause = document.querySelector("#pause");
var stop = document.querySelector("#stop");
var mode = document.querySelector("#sessionOrBreak");
var timer = document.querySelector("#theTimer");


function timerSettings(){
	if (this.id=='sessionDown'){
		if(sessionDuration>0){
		userEditedSessionDuration=userEditedSessionDuration-60;
		sessionDuration=userEditedSessionDuration;
		sessionShow.textContent = secToMin(userEditedSessionDuration);
		timer.textContent = secToMin(userEditedSessionDuration);
		}
	}
	else if (this.id=='sessionUp'){
		userEditedSessionDuration=userEditedSessionDuration+60;
		sessionDuration=userEditedSessionDuration;
		sessionShow.textContent = secToMin(userEditedSessionDuration);
		timer.textContent = secToMin(userEditedSessionDuration);
	}
	else if (this.id=='breakDown'){
		if(breakDuration>0){
		userEditedBreakDuration= userEditedBreakDuration-60;
		breakDuration= userEditedBreakDuration;
		breakShow.textContent = secToMin(userEditedBreakDuration);
		}	
	}
	else if (this.id=='breakUp'){
		userEditedBreakDuration=userEditedBreakDuration+60;
		breakDuration = userEditedBreakDuration;
		breakShow.textContent = secToMin(userEditedBreakDuration);
	}
}

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
		sessionDuration=userEditedSessionDuration;
		breakDuration=userEditedBreakDuration;
		together();
	}
}

var timerInterval;
function player(){
	timerInterval = setInterval(together, 1000);
}

function refresher(){
	clearInterval(timerInterval);
	sessionDuration=1500;
	userEditedSessionDuration=sessionDuration
	sessionShow.textContent= secToMin(userEditedSessionDuration);
	breakDuration=300;
	userEditedBreakDuration=breakDuration;
	breakShow.textContent= secToMin(userEditedBreakDuration);
	timer.textContent = secToMin(userEditedSessionDuration);
	mode.textContent = "Refreshed"
	$("#play").one("click", player);
}

function pauser(){
	clearInterval(timerInterval);
	mode.textContent = "Paused"
	$("#play").one("click", player);
}

function stopper(){
	clearInterval(timerInterval);
	sessionDuration=userEditedSessionDuration;
	breakDuration=userEditedBreakDuration;
	timer.textContent = secToMin(sessionDuration);
	mode.textContent = "Stopped"
	$("#play").one("click", player);
}

sessionDown.addEventListener("click", timerSettings);
sessionUp.addEventListener("click", timerSettings);
breakDown.addEventListener("click", timerSettings);
breakUp.addEventListener("click", timerSettings);

$("#play").one("click", player);
refresh.addEventListener("click", refresher);
pause.addEventListener("click", pauser);
stop.addEventListener("click", stopper);

});