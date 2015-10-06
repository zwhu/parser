import expect from 'expect.js'

import reader from './../util/reader'
import Lexer from './../lexer'

describe('tokens', () => {

  const values = [
    'while', 'i', '<', '10', '{', 'sum', '=', 'sum', '+', 'i', 'i', '=', 'i', '+', '1', '}', 'i', '=', '"\\"str"', 'sum'
  ]
  let lexer
  describe('read', ()=> {
    before(() => {
      lexer = new Lexer(reader(`${__dirname}/test.txt`))
    })

    after(()=> {
      lexer = null
    })


    it('reads tokens will right', () => {
      expect(values.every((v) => {
        return v === lexer.read().getText()
      })).to.be.ok()
    })

    it('the last EOF', () => {
      expect(lexer.read().getLineNumber()).to.be(-1)
      expect(lexer.read().getLineNumber()).to.be(-1)
    })
  })

  describe('peek', ()=> {
    before(() => {
      lexer = new Lexer(reader(`${__dirname}/test.txt`))
    })

    after(()=> {
      lexer = null
    })

    it('peeks tokens will right', () => {
      expect(values.every((v, index) => {
        return v === lexer.peek(index).getText()
      })).to.be.ok()
    })

    it('the last EOF', () => {
      expect(lexer.peek(-1).getLineNumber()).to.be(-1)
      expect(lexer.read().getLineNumber()).to.not.be(-1)
    })
  })

})
