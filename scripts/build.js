const fs = require('fs')
const exec = require('shelljs').exec
const {
  repo,
  repoDir,
  repoName
} = require('../config')

console.log(  
  repo,
  repoDir,
  repoName)

console.log(`

rebuild: 1. begin to pull git repo: ${repo}
`)
if(!fs.existsSync(repoDir)) {
  console.log(`
    \t DIR ${repoDir} doesn't exsit.
    \t Make a new DIR!
  `)
  fs.mkdirSync(repoDir)
  exec(`cd ${repoDir} && git clone ${repo}`)
}
exec(`cd ${repoDir} && git pull origin master`)
console.log(`

rebuild: 2. then build static site
`)
exec('yarn build')
console.log(`

rebuild: 3. finaly rm old static/ DIR, cp generated public/ DIR to new static/
`)
exec('rm -fr static/ && cp -rf public/ static/')