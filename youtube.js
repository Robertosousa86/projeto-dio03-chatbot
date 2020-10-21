const YouTube = require('youtube-node');
const config = require('./yt-config');

const youTube = new YouTube();
youTube.setKey(config.key);

youTube.search('Exercício em cada para bicips', 2, function (error, result) {
  if (!error) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log('Ops... algo deu errado!')
  }
});