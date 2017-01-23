

	/* Code for Clock */
function runClock() {

	now = new Date();

	hours = now.getHours();

	minutes = now.getMinutes();

	seconds = now.getSeconds();

	timeStr = "" + ((hours > 12) ? hours - 12 : hours);

	timeStr += ((minutes < 10) ? ":0" : ":") + minutes;

	timeStr += ((seconds < 10) ? ":0" : ":") + seconds;

	timeStr += (hours >= 12) ? " PM" : " AM";

	document.clock.face.value=timeStr;

	setTimeout("runClock()",1000);
}
	window.onload = function() {
			runClock();
		}

		 var body = document.getElementsByTagName('body')[0];
			function disableBodyScroll() {
				body.style.overflowY = 'hidden';
			}
			function enableBodyScroll() {
				body.style.overflowY = 'auto';
			}

	/* Code for Dice roller! */
	function rollDice(){
		var die1 = document.getElementById("Die1");
		var die2 = document.getElementById("Die2");
		var die3 = document.getElementById("Die3");
		var status = document.getElementById("status");
		var d1 = Math.floor(Math.random() * 4) + 1;
		var d2 = Math.floor(Math.random() * 6) + 1;
		var d3 = Math.floor(Math.random() * 20) + 1;
		var diceTotal = d1 + d2 + d3;
		die1.innerHTML = d1;
		die2.innerHTML = d2;
		die3.innerHTML = d3;
		status.innerHTML = "You rolled "+diceTotal+".";
	}
	

	/* © Copyright Dalian Hayes, 2015-2016~ Source Help from CodeAcademy.com 
					Detailed Copyright Notice at :http://Smokezarn.github.io/Pages/CRN */