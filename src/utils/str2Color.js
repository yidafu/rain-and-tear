import crypto from 'crypto'
import colors from './colors'

let colorsPool = Object.values(colors)
  // 选择较浅的前 7 号颜色
  .filter((color, idx) => idx % 10 < 6)

export default (str) => {
  let hash = crypto
    .createHash('md5')
    .update(str)
    .digest('hex')
    .substr(0, 6)
  return colorsPool[parseInt(hash, 16) % colorsPool.length]
}