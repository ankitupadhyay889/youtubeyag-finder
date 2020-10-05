# youtube-tags 🔍
[![License](https://img.shields.io/npm/l/youtube-tags.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/youtube-tags.svg)](https://www.npmjs.com/package/youtube-tags)
[![Bundlephobia](https://badgen.net/bundlephobia/min/youtube-tags)](https://bundlephobia.com/result?p=youtube-tags)

🔍 Retrieve Youtube video tags from video id - CLI or dependency in project

## ☕️ Support
<a href="https://www.buymeacoffee.com/jOVt3wg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="42" ></a>
<a href="https://www.paypal.me/Jeremy38100" target="_blank"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" height="42" alt="PayPal"></a>

## 🏁 Install
 - as a CLI : `npm install -g youtube-tags`
 - as a dependency : `npm install --save youtube-tags`

## 🏃‍♂️ Usage

### As a CLI
`youtube-tags [videoId]`

Exemple :
```bash
youtube-tags GUEZCxBcM78
# GoPro, HD, HERO2, Surfing, Skiing, Snowboarding, Wingsuit, Flight, Base Jumping, Scuba Diving, Adventure Travel, HD Video Camera, ゴープロ, 고프로
```

### As a dependency
```js
const ytbTags = require('youtube-tags');

const tags = await ytbTags.getYoutubeTags('GUEZCxBcM78'));
```
