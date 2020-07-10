import Alphabetize, { getFullChars, getCamelChars } from '../src/index'

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