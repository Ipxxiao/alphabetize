"use strict";
/**
 * alphabetize module.
 * @module alphabetize
 * @see doc https://github.com/Ipxxiao/alphabetize/tree/master/docs
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var charDict_1 = __importDefault(require("./charDict"));
var fullDict_1 = __importDefault(require("./fullDict"));
var polyphone_1 = __importDefault(require("./polyphone"));
var opts = {
    checkPolyphone: false,
};
/**
 * 提取拼音, 返回首字母大写形式
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
var getFullChars = function (str) {
    var result = '', name;
    for (var i = 0, len = str.length; i < len; i++) {
        var ch = str.substr(i, 1), unicode = ch.charCodeAt(0);
        if (unicode > 40869 || unicode < 19968) {
            result += ch;
        }
        else {
            result += _getFullChar(ch);
        }
    }
    return result;
};
exports.getFullChars = getFullChars;
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
var getCamelChars = function (str, options) {
    /* istanbul ignore next */
    if (typeof str === 'string') {
        var chars = []; // 保存中间结果的数组
        options = Object.assign({}, opts, options);
        for (var i = 0, len = str.length; i < len; i++) {
            // 获得unicode码
            var ch = str.charAt(i);
            // 检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
            chars.push(_getChar(ch, options));
        }
        // 处理arrResult,返回所有可能的拼音首字母串数组
        return _getResult(chars, options);
    }
    else {
        return '';
    }
};
exports.getCamelChars = getCamelChars;
/**
 * 提取拼音
 *
 * @param {string} str
 * @returns {string}
 */
var _getFullChar = function (str) {
    for (var key in fullDict_1.default) {
        if (-1 !== fullDict_1.default[key].indexOf(str)) {
            return _capitalize(key);
        }
    }
};
/**
 * 首字母大写
 *
 * @param {string} str
 * @returns {string}
 */
var _capitalize = function (str) {
    var first = str.substr(0, 1).toUpperCase();
    var spare = str.substr(1, str.length);
    return first + spare;
};
/**
 * 提取字符
 *
 * @param {string} ch
 * @param {Options} options
 * @returns {string}
 */
var _getChar = function (ch, options) {
    var unicode = ch.charCodeAt(0);
    // 如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
    if (unicode > 40869 || unicode < 19968)
        return ch;
    // 检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
    if (!options.checkPolyphone)
        return charDict_1.default.charAt(unicode - 19968);
    return polyphone_1.default[unicode] ? polyphone_1.default[unicode] : charDict_1.default.charAt(unicode - 19968);
};
/**
 * 返回所有可能的拼音首字母串数组
 *
 * @param {string[]} chars
 * @param {Options} options
 * @returns {(string | string[])}
 */
var _getResult = function (chars, options) {
    if (!options.checkPolyphone)
        return chars.join('');
    var result = [''], j;
    for (var i = 0, len = chars.length; i < len; i++) {
        var str = chars[i], strlen = str.length;
        if (strlen == 1) {
            for (j = 0; j < result.length; j++) {
                result[j] += str;
            }
        }
        else {
            var swap1 = result.slice(0);
            result = [];
            for (j = 0; j < strlen; j++) {
                // 复制一个相同的arrResult
                var swap2 = swap1.slice(0);
                // 把当前字符str[k]添加到每个元素末尾
                for (var k = 0; k < swap2.length; k++) {
                    swap2[k] += str.charAt(j);
                }
                // 把复制并修改后的数组连接到arrResult上
                result = result.concat(swap2);
            }
        }
    }
    return result;
};
exports.default = {
    getFullChars: getFullChars,
    getCamelChars: getCamelChars,
    FullDict: fullDict_1.default,
};
//# sourceMappingURL=index.js.map