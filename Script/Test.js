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
