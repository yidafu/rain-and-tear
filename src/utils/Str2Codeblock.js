// import Prism from 'prismjs'
const Prism = require('prismjs')
// import components from 'prismjs/components'
const components = require('prismjs/components')
// import 'prismjs/plugins/prism-line-numbers.css'
// Prism.highlightAll()
// /home/yidafu/Code/rain-and-tear/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js

function loadPrismLanguage( lang ) {
  if(Prism.languages[lang]) return true

  const langData = components.languages[lang]

  // if(!langData) throw new Error(`Prism dosen't support ${lang}`)
  if(!langData) return false
  
  if(langData.option === 'default') return true

  if(langData.require) {
    if(Array.isArray(langData.require)) {
      langData.require.forEach(loadPrismLanguage)
    } else {
      loadPrismLanguage(langData.require)
    }
  }

  require(`prismjs/components/prism-${lang}.js`)
  return true
}
export default (rawCodString) => {
  const codeRegExp = /<pre><code class="language-(.*?)">([\s\S]+?)<\/code><\/pre>/g
  
  // ??? 不懂为什么会有两个重复的返回值
  // codeRegExp.exec(str)
  
  // @ref https://segmentfault.com/a/1190000002640851
  // @ref https://blog.csdn.net/lxcnn/article/details/4756030
  return rawCodString.replace(/<pre><code class="language-(.*?)">([\s\S]+?)<\/code><\/pre>/g, 
    (match,p1,p2) => {
      // @BUG Prism 不支持 Shell 的语法高亮
      p1 = loadPrismLanguage(p1) ? p1 : 'html'
      
      const codeBlock = Prism.highlight( p2, Prism.languages[p1], p1)
      return `<pre class="language-${p1}"><code class="language-${p1}">${codeBlock}</code></pre>`
    })
}
  
  