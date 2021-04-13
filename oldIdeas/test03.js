// ES6 / TypeScript
import { getSubtitles } from 'youtube-captions-scraper';

getSubtitles({
  videoID: 'BpobjOFkt8E', // youtube video id
  lang: 'fr' // default: `en`
}).then(captions => {
  console.log(captions);
});

getSubtitles()