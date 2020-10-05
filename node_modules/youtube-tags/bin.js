#!/usr/bin/env node
const ytbTags = require('./index');

(async () => {
  try {
    if (!process.argv[2]) throw new Error('Error\nUsage: youtube-tags [videoId]\nRetrieve videoId : https://www.youtube.com/watch?v=[videoId]');
    console.log((await ytbTags.getYoutubeTags(process.argv[2])).join(', '))
  } catch (e) {
    console.log('Error\n' + e);
  }
})();