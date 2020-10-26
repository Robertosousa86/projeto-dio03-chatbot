require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

const myToken = process.env.MY_TOKEN;

const bot = new TelegramBot(myToken, {
  polling: true
});

try {
  bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = dialogflow.sendMessage(chatId.toString(), msg.text);

    let responseText = dfResponse.text;
    if (dfResponse === 'treino específico') {
      responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue)
    }

    bot.sendMessage(chatId, dfResponse.text);
  });

} catch (err) {
  console.log(err);
}