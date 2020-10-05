const https = require('https');

function decode(encodedString) {
  const translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  const translate = {
      'nbsp': ' ',
      'amp' : '&',
      'quot': '\"',
      'lt'  : '<',
      'gt'  : '>',
  };
  return encodedString
  .replace(translate_re, (match, entity) => translate[entity])
  .replace(/&#(\d+);/gi, (match, numStr) => String.fromCharCode(parseInt(numStr, 10)));
}

exports.getYoutubeTags = function (videoId) {
  return new Promise((resolve, reject) => {
    https.get('https://www.youtube.com/watch?v=' + videoId, resp => {
      let data = '';
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => {
        const searchStart = 'keywords" content="';
        const searchEnd = '"';
        const index = data.indexOf(searchStart);
        if (index < 0) reject('Invalid videoId')
        const content = data.slice(index + searchStart.length);
        const tags = decode(content.slice(0, content.indexOf(searchEnd))).split(',');
        if (tags.length === 1 && tags[0] === '') reject('Cannot fetch tags for this video');
        resolve(tags.map(Function.prototype.call, String.prototype.trim));
      });
      resp.on('error', reject);
    });
  })
}