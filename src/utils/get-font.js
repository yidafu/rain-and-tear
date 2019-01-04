const shell = require('shelljs')
// const fs = require('fs')

// const buff = fs.readFileSync('./material.font.css')

// const fontFileContent = buff.toString()

// fontFileContent.replace(/url\(([\S]+)\)/g, (match,p1) => {
//   let code = shell.exec(`wget ${p1}`)
//   console.log(code)

//   return ''
// })

const urls =  [
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2'
]

urls.forEach( url => shell.exec(`wget ${url}`) )
let url = 'https://raw.githubusercontent.com/google/material-design-icons/master/iconfont/MaterialIcons-Regular.'

let exts = ['eot', 'ijmap', 'svg', 'ttf', 'woff', 'woff2']

exts.forEach(ext => {
  shell.exec(`wget ${url}${ext}`)
})