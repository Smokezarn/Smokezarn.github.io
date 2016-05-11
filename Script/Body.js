	/* JavaScript for NeraRecords.Html (index)*/
document.write("Last modified on "+document.lastModified);


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


	/* Code for Dice roller! */
	function rollDice(){
		var die1 = document.getElementById("Die1");
		var die2 = document.getElementById("Die2");
		var die3 = document.getElementById("Die3");
		var status = document.getElementById("status");
		var d1 = Math.floor(Math.random() * 10) + 1;
		var d2 = Math.floor(Math.random() * 10) + 1;
		var d3 = Math.floor(Math.random() * 10) + 1;
		var diceTotal = d1 + d2 + d3;
		die1.innerHTML = d1;
		die2.innerHTML = d2;
		die3.innerHTML = d3;
		status.innerHTML = "You rolled "+diceTotal+".";
	}

		/* Code and Programing by:
			:Dalian Hayes~ Source Help from CodeAcademy.com */