var telbot = require('node-telegram-bot-api');
var token = '1197959992:AAHHwPunFwnVRShqG1JaLtXzyDcZ9b4KrlM';
var bot = new telbot(token,{polling:true});
var request=require('request');
bot.onText(/\/movie (.+)/,function(msg,match){
	var movie = match[1];
	var chatId=msg.chat.id;
	request('http://www.omdbapi.com/?apikey=593ea2f4&t=${movie}',function(error,response,body){
		if(!error && response.statusCode === 200){
			bot.sendMessage(chatId,'_looking for '+movie+'..',{parse_mode:'Markdown'});
			bot.sendMessage(chatId,'Result:\n '+body)
		}
	});
});