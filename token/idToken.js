/**
 * Created by zwhu on 15/9/29.
 */


import Token from './token'


export default class idToken extends Token {

  __value

  constructor(line, v) {
    super(line)
    this.__value = v
  }

  isIdentifier() {
    return true
  }

  getText() {
    return this.__value
  }
}
