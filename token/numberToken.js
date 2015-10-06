/**
 * Created by zwhu on 15/9/29.
 */


import Token from './token'

export default class numberToken extends Token {
  __value

  constructor(line, v) {
    super(line)
    this.__value = v
  }

  isNumber() {
    return true
  }

  getText() {
    return this.__value.toString(10)
  }

  getNumber() {
    return this.__value
  }
}
