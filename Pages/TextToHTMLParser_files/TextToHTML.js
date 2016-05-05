/*As for that, yes all letters and numbers are to be the aqua/teal-ish color ( 008080 )
 
All characters that need to be green ( 006400 ) are-
 
] [ } { = - + _ ) ( * & ^ % $ # @ ! ~ ` ' ; / . , | \ " : ? > <

( Hi, how are you? ) and it outputs-
( <color=#008080>Hi</color><color=#006400>,</color><color=#008080> how are you</color><color=#006400>?</color> ) =
( [color=#008080]Hi[/color][color=#006400],[/color][color=#008080] how are you[/color][color=#006400]?[/color] )


*/

var GREENLETTERS = "][}{=-+_)(*&^%$#@!~`';/.,|\\\":?><";

var resultbbcode;

var submitForm = function()
{
	var input = document.getElementById("inputtext").value;
	var result = parse(input);
	if (result != "")
	{
		document.getElementById("outputhtml").innerHTML = result;
		document.getElementById("outputbbcode").innerHTML = resultbbcode;
		document.getElementById("preview").innerHTML = result;
	}
};

function parse(input)
{
	var result = "";
	resultbbcode = "";
	var accumulated = "";
	var currColor = "aqua";

	for (var i in input)
	{
		var curr = input[i];
		// This character should be green
		if (GREENLETTERS.indexOf(curr) != -1)
		{
			// Current is green, carry on
			if (currColor == "green")
			{
				accumulated += curr;
			}
			else // Need to switch from aqua
			{
				result += aqua(accumulated);
				resultbbcode += aquabb(accumulated);
				accumulated = curr;
				currColor = "green";
			}
		}
		else // This character should be aqua
		{
			// Current is aqua, carry on
			if (currColor == "aqua")
			{
				accumulated += curr;
			}
			else
			{
				result += green(accumulated);
				resultbbcode += greenbb(accumulated);
				accumulated = curr;
				currColor = "aqua";
			}
		}
	}

	// End of input, add last part
	if (currColor == "aqua")
	{
		result += aqua(accumulated);
		resultbbcode += aquabb(accumulated);
	}
	else
	{
		result += green(accumulated);
		resultbbcode += aquabb(accumulated);
	}
	return result;
}


function aqua(input)
{
	if (input == "")
		return "";
	return '<span style="color: #008080;">' + input + '</span>';
}

function green(input)
{
	if (input == "")
		return "";
	return '<span style="color: #006400;">' + input + '</span>';
}

function aquabb(input)
{
	if (input == "")
		return "";
	return '[color=#008080]' + input + '[/color]';
}

function greenbb(input)
{
	if (input == "")
		return "";
	return '[color=#006400]' + input + '[/color]';
}

/* saved from url=(http://kyzderp.github.io/derps/TextToHTML.html)
	Parser Made By Kyzeragon^ For Smokezarn on request. */
