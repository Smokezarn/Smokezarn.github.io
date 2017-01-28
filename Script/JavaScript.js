	/* JavaScript for NeraRecords.Html (index)*/



		/* Script for Dropdown Menu */
/*toggle between hiding and showing the dropdown content */
function myFunction1() {document.getElementById("myDropdown1").classList.toggle("show1");}
function myFunction2() {document.getElementById("myDropdown2").classList.toggle("show2");}
function myFunction3() {document.getElementById("myDropdown3").classList.toggle("show3");}

	/* Script for Clock */
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
} window.onload = function() {runClock();}
	
	/* Hide Body Scroll Bar */
	 var body = document.getElementsByTagName('body')[0];
		function disableBodyScroll() {body.style.overflowY = 'hidden';}
		function enableBodyScroll() {body.style.overflowY = 'auto';}

	/* © Copyright Dalian Hayes, 2015-2017~ Source Help from CodeAcademy.com 
					Detailed Copyright Notice at :http://Smokezarn.github.io/Pages/CRN */
