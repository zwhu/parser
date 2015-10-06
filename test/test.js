import reader from './../util/reader'
import Lexer from './../lexer'

let lexer = new Lexer(reader(`${__dirname}/test.txt`))

for (var i = 0; i < lexer.read().length; i++)
  console.log(lexer.read()[i].getText())
