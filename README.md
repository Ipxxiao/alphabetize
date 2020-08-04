# Alphabetize &middot; [![NPM version](https://img.shields.io/npm/v/chinese-alphabetize.svg?style=flat)](https://www.npmjs.com/package/chinese-alphabetize) [![Build Status](https://travis-ci.org/Ipxxiao/alphabetize.svg?branch=master)](https://travis-ci.org/Ipxxiao/alphabetize) [![Coverage Status](https://coveralls.io/repos/github/Ipxxiao/alphabetize/badge.svg?branch=master)](https://coveralls.io/github/Ipxxiao/alphabetize?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

To get chinese pinyin or alphabet from chinese. 从汉字提取拼音，返回首字母大写形式；提取首字母，返回大写形式。

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i chinese-alphabetize -S
or
yarn add chinese-alphabetize
```

## Usage

``` javascript
import Alphabetize, { getFullChars, getCamelChars } from 'chinese-alphabetize'
or
const Alphabetize, { getFullChars, getCamelChars } = require('chinese-alphabetize')
```


. **getFullChars（提取拼音，返回首字母大写形式）**
``` javascript
<
Alphabetize.getFullChars('张三')

->
ZhangSan
```

. **getCamelChars（提取首字母，返回大写形式）**
``` javascript
<
Alphabetize.getCamelChars('张三铅')
Alphabetize.getCamelChars('张三铅', { checkPolyphone: true })

->
ZSQ
['ZSQ', 'ZSY']
```

## More
- [MIT License](https://github.com/Ipxxiao/alphabetize/blob/master/LICENSE)
- [Changelog](https://github.com/Ipxxiao/alphabetize/blob/master/CHANGELOG.md)
- [Test Case](https://github.com/Ipxxiao/alphabetize/blob/master/__tests__/index.spec.ts)
- [Docs](https://github.com/Ipxxiao/alphabetize/tree/master/docs)