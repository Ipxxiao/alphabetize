/**
 * alphabetize module.
 * @module alphabetize
 * @see doc https://github.com/Ipxxiao/alphabetize/tree/master/docs
 */
import FullDict from './fullDict';
interface Options {
    checkPolyphone: boolean;
}
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
declare const getFullChars: (str: string) => string;
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
declare const getCamelChars: (str: string, options?: Options | undefined) => string | string[];
export { getFullChars, getCamelChars, };
declare const _default: {
    getFullChars: (str: string) => string;
    getCamelChars: (str: string, options?: Options | undefined) => string | string[];
    FullDict: typeof FullDict;
};
export default _default;
