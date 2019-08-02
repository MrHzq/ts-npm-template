'use strict'
const expect = require('chai').expect
const methods = require('../dist/index.js')

describe('add', () => {
    it('结果：200', () => {
        expect(methods.default(100, 100)).to.deep.equal(200)
    })
})
