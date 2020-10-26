const YouTube = require('youtube-node');
const config = require('./yt-config');

const youTube = new YouTube();
youTube.setKey(config.key);

function searchVideoURL(mesage, queryText) {
  return new Promise((resolve, reject) => {
    youTube.search(`Exercício em cada para bicips ${queryText}`, 2, function (error, result) {
      if (!error) {
        const videosId = result.itens.map((item) => item.id.videosId).filter(item => item);
        const youtubeLinks = videosId.map(videosId => `https://www.youtube.com/watch?v=${videosId}`)
        resolve(`${mesage} ${youtubeLinks.join(`, `)}`)
      } else {
        reject('Ops.. houve um erro!')
      }
    });
  });

};

module.exports.searchVideoURL = searchVideoURL;