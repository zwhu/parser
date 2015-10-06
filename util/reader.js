/**
 * Created by zwhu on 15/9/30.
 */

import {readFileSync} from 'fs'

function reader(filename) {
  return readFileSync(filename, 'utf8').split(/[\n\r]|\r\n/g)
}

export default  reader
