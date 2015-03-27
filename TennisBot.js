var config = {

	channels: ["#tvno"],
	server: "irc.freenode.net",
	botName: "TestennisBot"

};



var irc = require("irc");
var twd = require('./Countdowns/twd.js');
var got = require('./Countdowns/got.js');
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
bot.addListener('message', function(from, to, message) {
	if( message.indexOf('!twd')> -1 )
	{
		
		bot.say(to, twd.showRemaining());
		
	}
});
bot.addListener('message', function(from, to, message) {
	if( message.indexOf('!got')> -1 )
	{
		
		bot.say(to, got.showRemaining());
		
	}
});