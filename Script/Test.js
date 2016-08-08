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


		/* Code and Programing by:
			:Dalian Hayes~ Source Help from CodeAcademy.com */
