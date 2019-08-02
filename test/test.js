'use strict'
const expect = require('chai').expect
const { add } = require('../dist/index.js')

describe('add', () => {
    it('结果：200', () => {
        expect(add(100, 100)).to.deep.equal(200)
    })
})
