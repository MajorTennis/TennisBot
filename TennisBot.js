var config = {

	channels: ["#tvno","#thewalkingdead"],
	server: "irc.freenode.net",
	botName: "TennisBot"

};



var irc = require("irc");

var bot = new irc.Client(config.server, config.botName,  {

	channels: config.channels

});


bot.addListener('message', function(from, to, message) {

	if( message.indexOf('duckseason')> -1 )
	{
		bot.say(to, "rabbitseason");
	}
	

});
bot.addListener('message', function(from, to, message) {
	
		//THE WALKING DEAD
var end1= new Date('03/30/2015 2:00 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

	function showRemaining(to){
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
		bot.say(to, response);
	}

	}


	if( message.indexOf('next')> -1 )
	{
		showRemaining(to);
	}
	

});
bot.addListener('message', function(from, to, message) {

	if( message.indexOf('tennisball')> -1 )
	{
		bot.say(to, "that's me");
	}
	

});