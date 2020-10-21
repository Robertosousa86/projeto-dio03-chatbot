const dialogflow = require('dialogflow');
const config = require('./my-bot.json');

const sessionClient = new dialogflow({
  projectId: config.projectId,
  credentials: {
    private_key: config.private_key,
    cliente_email: config.client_email
  }
});

try {
  async function sendMessage(chatId, message) {
    const sessionPath = sessionClient.sessionPath(config.project_Id, chatId);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'pt-BR'
        }
      }
    }
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(JSON.stringify(result, null, 2));
  }

} catch (err) {
  console.log(err);
}

sendMessage('1234', 'Oi??');