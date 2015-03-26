var twd = require('countdowns/twd.js);
eval(fs.readFileSync('tools.js')+'');
var config = {

	channels: ["#tvno"],
	server: "irc.freenode.net",
	botName: "TestennisBot"

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

	if( message.indexOf('tennisball')> -1 )
	{
		bot.say(to, "that's me");
	}
	

});