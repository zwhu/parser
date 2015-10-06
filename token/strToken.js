/**
 * Created by zwhu on 15/9/29.
 */


import Token from './token'


export default class strToken extends Token {
  __value

  constructor(line, v) {
    super(line)
    this.__value = v
  }

  isString() {
    return true
  }

  getText() {
    return (this.__value)
  }
}
