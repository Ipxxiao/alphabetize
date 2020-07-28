/**
 * alphabetize module.
 * @module alphabetize
 * @see doc https://github.com/Ipxxiao/alphabetize/tree/master/docs
 */

import CharDict from './charDict'
import FullDict from './fullDict'
import Polyphone from './polyphone'

interface Options {
    checkPolyphone: boolean
}

let opts: Options = {
    checkPolyphone: false,
}

/**
 * 提取拼音，返回首字母大写形式
 *
 * @example
 * ```js
 * getFullChars('张三')
 * //=> ZhangSan
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
const getFullChars = (str: string): string => {
    let result: string = '';

    for (let i: number = 0, len: number = str.length; i < len; i++) {
        let ch: string = str.substr(i, 1),
            unicode: number = ch.charCodeAt(0);
        if (unicode > 40869 || unicode < 19968) {
            result += ch;
        } else {
            result += _getFullChar(ch);
        }
    }
    return result;
}

/**
 * 提取首字母，返回大写形式
 *
 * @example
 * ```js
 * getCamelChars('张三铅')
 * //=> ZSQ
 * getCamelChars('张三铅', { checkPolyphone: true })
 * //=> ['ZSQ', 'ZSY']
 * ```
 *
 * @param {string} str
 * @param {Options} [options]
 * @returns {(string | string[])}
 */
const getCamelChars = (str: string, options?: Options): string | string[] => {
    /* istanbul ignore next */
    if (typeof str === 'string') {
        let chars: string[] = []; // 保存中间结果的数组

        options = Object.assign({}, opts, options);

        for (let i: number = 0, len: number = str.length; i < len; i++) {
            // 获得unicode码
            let ch: string = str.charAt(i);
            // 检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
            chars.push(_getChar(ch, options));
        }
        // 处理arrResult,返回所有可能的拼音首字母串数组
        return _getResult(chars, options);
    } else {
        return ''
    }
}

/**
 * 提取拼音
 *
 * @param {string} str
 * @returns {string}
 */
const _getFullChar = (str: string): string | undefined => {
    for (let key in FullDict) {
        if (-1 !== FullDict[key].indexOf(str)) {
            return _capitalize(key);
        }
    }
}

/**
 * 首字母大写
 *
 * @param {string} str
 * @returns {string}
 */
const _capitalize = (str: string): string => {
    let first: string = str.substr(0, 1).toUpperCase();
    let spare: string = str.substr(1, str.length);
    return first + spare;
}

/**
 * 提取字符
 *
 * @param {string} ch
 * @param {Options} options
 * @returns {string}
 */
const _getChar = (ch: string, options: Options): string => {
    let unicode: number = ch.charCodeAt(0);
    // 如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
    if (unicode > 40869 || unicode < 19968)
        return ch;
    // 检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
    if (!options.checkPolyphone)
        return CharDict.charAt(unicode - 19968);
    return Polyphone[unicode] ? Polyphone[unicode] : CharDict.charAt(unicode - 19968);
}

/**
 * 返回所有可能的拼音首字母串数组
 *
 * @param {string[]} chars
 * @param {Options} options
 * @returns {(string | string[])}
 */
const _getResult = (chars: string[], options: Options): string | string[] => {
    if (!options.checkPolyphone)
        return chars.join('');
    let result: string[] = [''],
        j: number;
    for (let i: number = 0, len: number = chars.length; i < len; i++) {
        let str: string = chars[i],
            strlen: number = str.length;
        if (strlen == 1) {
            for (j = 0; j < result.length; j++) {
                result[j] += str;
            }
        } else {
            let swap1: string[] = result.slice(0);
            result = [];
            for (j = 0; j < strlen; j++) {
                // 复制一个相同的arrResult
                let swap2: string[] = swap1.slice(0);
                // 把当前字符str[k]添加到每个元素末尾
                for (let k: number = 0; k < swap2.length; k++) {
                    swap2[k] += str.charAt(j);
                }
                // 把复制并修改后的数组连接到arrResult上
                result = result.concat(swap2);
            }
        }
    }
    return result;
}

export {
    getFullChars,
    getCamelChars,
}

export default {
    getFullChars,
    getCamelChars,
    FullDict,
}