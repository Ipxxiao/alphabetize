# alphabetize

[![NPM version](https://img.shields.io/npm/v/alphabetize.svg?style=flat)](https://www.npmjs.com/package/alphabetize)
[![Build Status](https://travis-ci.org/Ipxxiao/alphabetize.svg?branch=master)](https://travis-ci.org/Ipxxiao/alphabetize)
[![codecov](https://codecov.io/gh/Ipxxiao/alphabetize/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/alphabetize)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

to get chinese pinyin or alphabet from chinese. 提取拼音, 返回首字母大写形式；提取首字母，返回大写形式

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i chinese-alphabetize -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript
import { getFullChars, getCamelChars } from 'chinese-alphabetize'
import Aalphabetize from 'chinese-alphabetize'
```


. **getFullChars**
``` javascript
Aalphabetize.getFullChars('张三')
```

``` javascript
ZhangSan
```

. **getCamelChars**
``` javascript
Aalphabetize.getCamelChars('张三铅')
Aalphabetize.getCamelChars('张三铅', { checkPolyphone: true })
```

``` javascript
ZSQ
['ZSQ', 'ZSY']
```

## More
- [Docs](https://github.com/Ipxxiao/alphabetize/tree/master/docs)
- [Test](https://github.com/Ipxxiao/alphabetize/blob/master/__tests__/index.spec.ts)