'use strict'
const expect = require('chai').expect
const { Tsadd } = require('../dist/index.js')

describe('Tsadd', () => {
    it('结果：200', () => {
        expect(Tsadd(100, 100)).to.deep.equal(200)
    })
})
