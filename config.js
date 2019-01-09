const config = {
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