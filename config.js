const config = {
  author: '付达意',
  title: '付达意的博客',
  description: '付达意的博客',
  repo: 'https://github.com/yidafu/blog-post.git',
  repoDir: './blog-post/',
  branch: 'master',
  port: 8080,
  repoName: '',
  get repoPath(){
    return this.repoDir + this.repoName

  }
}

let {repo} = config
config.repoName = repo.substring(repo.lastIndexOf('/')+1, repo.lastIndexOf('.git'))

module.exports =  config