/**
 * Created by zwhu on 15/9/29.
 */


export default class token {

  __lineNumber

  static EOF = new token(-1)

  static EOL = '\\n'

  constructor(line) {
    this.__lineNumber = line
  }

  getLineNumber() {
    return this.__lineNumber
  }

  isIdentifier() {
    return false
  }

  isNumber() {
    return false
  }

  isString() {
    return false
  }

  getNumber() {
    throw new TypeError('not number token', undefined, __lineNumber)
  }

  getText() {
    return ""
  }

}
