import { getFullChars, getCamelChars } from '../src/index'
import Alphabetize from '../src/index'

import { log } from '../src/_utils/index'

const methods = ['getFullChars', 'getCamelChars']

describe('Alphabetize', () => {
	methods.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(Alphabetize).toHaveProperty(par)
			expect(Alphabetize[par]).toBeInstanceOf(Function)
		})
	})

	it(`getFullChars`, () => {
		expect(getFullChars('张三')).toEqual('ZhangSan')
		expect(getFullChars('张三1')).toEqual('ZhangSan1')
	})

	it(`getCamelChars`, () => {
		expect(getCamelChars('张三铅')).toEqual('ZSQ')
		expect(getCamelChars('张三铅1')).toEqual('ZSQ1')
		expect(getCamelChars('张三铅', { checkPolyphone: true })).toEqual(['ZSQ', 'ZSY'])
	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
