		//GAME OF THRONES
var end1= new Date('04/12/2015 2:00 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;


//exports.twd.


exports.showRemaining = function(to){
//bot.say(to, "call worked");

var now = new Date();
var distance = end1 - now;
var response= "";
	if(distance < 0){
		bot.say(to, "TBC");
	}else{
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		response = days + 'days ';
		response += hours + 'hrs ';
		response += minutes + 'mins ';
		response += seconds + 'secs';
		//bot.say(to, response);
		return response;
	}
}


