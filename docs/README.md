<a name="module_alphabetize"></a>

## alphabetize
<p>alphabetize module.</p>

**See**: doc https://github.com/Ipxxiao/alphabetize/tree/master/docs  

* [alphabetize](#module_alphabetize)
    * _static_
        * [.getFullChars](#module_alphabetize.getFullChars) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>
        * [.getCamelChars](#module_alphabetize.getCamelChars) ⇒ <code>string</code>
    * _inner_
        * [~getFullChars(str)](#module_alphabetize..getFullChars) ⇒ <code>string</code>
        * [~_capitalize(str)](#module_alphabetize.._capitalize) ⇒ <code>string</code>
        * [~_getChar(ch, options)](#module_alphabetize.._getChar) ⇒ <code>string</code>
        * [~_getResult(chars, options)](#module_alphabetize.._getResult) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>

<a name="module_alphabetize.getFullChars"></a>

### alphabetize.getFullChars ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>
<p>提取首字母，返回大写形式</p>

**Kind**: static property of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 
| [options] | <code>Options</code> | 

**Example**  
```js
getCamelChars('张三铅')
//=> ZSQ
getCamelChars('张三铅', { checkPolyphone: true })
//=> ['ZSQ', 'ZSY']
```
<a name="module_alphabetize.getCamelChars"></a>

### alphabetize.getCamelChars ⇒ <code>string</code>
<p>提取拼音</p>

**Kind**: static property of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="module_alphabetize..getFullChars"></a>

### alphabetize~getFullChars(str) ⇒ <code>string</code>
<p>提取拼音，返回首字母大写形式</p>

**Kind**: inner method of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
getFullChars('张三')
//=> ZhangSan
```
<a name="module_alphabetize.._capitalize"></a>

### alphabetize~\_capitalize(str) ⇒ <code>string</code>
<p>首字母大写</p>

**Kind**: inner method of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="module_alphabetize.._getChar"></a>

### alphabetize~\_getChar(ch, options) ⇒ <code>string</code>
<p>提取字符</p>

**Kind**: inner method of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| ch | <code>string</code> | 
| options | <code>Options</code> | 

<a name="module_alphabetize.._getResult"></a>

### alphabetize~\_getResult(chars, options) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>
<p>返回所有可能的拼音首字母串数组</p>

**Kind**: inner method of [<code>alphabetize</code>](#module_alphabetize)  

| Param | Type |
| --- | --- |
| chars | <code>Array.&lt;string&gt;</code> | 
| options | <code>Options</code> | 

