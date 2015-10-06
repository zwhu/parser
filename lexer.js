/**
 * Created by zwhu on 15/9/30.
 */

import Token from './token/token'
import IdToken from './token/idToken'
import StrToken from './token/strToken'
import NumToken from './token/numberToken'

const NUMBER_REGEX = /\d+/
const STRING_REGEX = /"(\\"|\\\\|\n|[^"])*"/
const ID_REGEX = /[A-Z_a-z][A-Z_a-z0-9]*|==|<=|>=|&&|\|\||[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/


const REGEX = /\s*((\/\/.*)|(\d+)|("(?:\\"|\\\\|\n|[^"])*")|[A-Z_a-z][A-Z_a-z0-9]*|==|<=|>=|&&|\|\||[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])?/g


let tokens = []

let __raw
export default  class Lexer {

  constructor(raw) {
    readLine(raw)
  }

  read() {
    return tokens
  }

  peek() {

  }

}


function readLine(raw) {
  raw.forEach((str, lineNo) => {
    let reg = new RegExp(REGEX)
    let match = reg.exec(str)
    if (match)
      while (match[0]) {
        addToken(match, lineNo + 1)
        match = reg.exec(str)
      }
    else
      console.error('出错了!!!!')
  })
  tokens.push(Token.EOF)
}


function addToken(match, lineNo) {
  let token
  if (!match[0])
    return
  switch (true) {
    case !!match[3]:
      token = new NumToken(lineNo, parseInt(match[3], 10))
      break
    case !!match[4]:
      token = new StrToken(lineNo, JSON.parse(JSON.stringify(match[4])))
      break
    default:
      token = new IdToken(lineNo, JSON.parse(JSON.stringify(match[1])))
      break
  }
  tokens.push(token)

}
