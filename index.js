require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const myToken = process.env.MY_TOKEN; // Token falso para teste

const bot = new TelegramBot(myToken, {
  polling: true
});

try {
  bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem! =)');
  });

} catch (err) {
console.log(err);
}