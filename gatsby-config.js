const path = require('path')
const blog = require('./config')

let { repoDir, repoName } = blog

console.log('|=====>',path.resolve(__dirname, repoDir, repoName))
const config = {
  siteMetadata: {
    title: 'YDF\'s Blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: path.resolve(__dirname, repoDir, repoName),
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve:'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },{
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            }
          }],
      },
    },      
  ],
}

module.exports =  config