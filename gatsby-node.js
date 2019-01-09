const path = require('path')
const {
  createFilePath
} = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const style_loader = require.resolve('style-loader')
const css_loader = require.resolve('css-loader')
const less_loader = require.resolve('less-loader')
const _ = require('lodash')
const crypto = require('crypto')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const devMode = process.env.NODE_ENV !== 'production'
/**
 *  @NOTE 
 *    `createPage`的`layout`参数在 v2 中移除了   
 *     @see https://github.com/gatsbyjs/gatsby/issues/3830
 */
exports.onCreateNode = ({
  node,
  getNode,
  actions
}) => {
  const {
    createNodeField
  } = actions
  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({
      node,
      getNode,
      basePath: './'
    })

    const slugs = slug.split('/')
    
    
    createNodeField({
      node,
      name: 'slug',
      value: '/post/' + slugs[slugs.length-2],
    }) 
    let cotegory = ''
    if( slugs.length > 3) {
      cotegory = slugs[1]
    } else {
      cotegory = 'Null'
    }
    createNodeField({
      node,
      name: 'category',
      value: cotegory,
    })
  }
}

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage,
    createNode
  } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allMarkdownRemark(sort: {
          fields: [frontmatter___date],
          order: DESC
        }, filter: {
          fields: {
            category: {
              ne: "Null"
            }
          }
        }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                tags
                date
              }
              fields {
                slug
                category
              }
              excerpt
            }
            next {
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const {
        edges,
        totalCount
      } = result.data.allMarkdownRemark
      
      // 第一步：找到所有的 Tags 
      let tags = edges
        // 去掉所有是 null 的tags 
        .filter( (edge) => edge.node.frontmatter.tags !== null)
        // 所有返回的 tag 和 node.frontmatter.tags 变为小写
        .map(edge => edge.node.frontmatter.tags.map((tag,idx,arr) => arr[idx] = tag.toLowerCase()))

      // 第二步：把 Tags 平坦化，去重
      tags = _.flatten(tags) // 平坦的 tags
      let uniqTags = _.uniqWith( // 去重
        tags,
        (one, anther) => one === anther
      )
      // 第三步：把数据结构转变为： [ {tag: string, nodes: [node,node]} ]
      let TagNodes = []
      uniqTags.forEach(tag => {
        let tagGroup = edges.filter(edge => {
          if (edge.node.frontmatter.tags && edge.node.frontmatter.tags.includes(tag)) {
            return edge.node
          }
        })
        TagNodes.push({ tag: tag, nodes: tagGroup })
      })
      
      // 第四步：创建页面
      TagNodes.forEach(tagNode => {
        createPaginatedPages({
          edges: tagNode.nodes,
          createPage: createPage,
          pageTemplate: path.resolve('./src/templates/MainPagination.jsx'),
          pageLength: 10,
          pathPrefix: `tags/${tagNode.tag}`,
          context: {
            totalCount: tagNode.nodes.length,
            tags: uniqTags,
          }
        })
      })

      createNode({
        tags: uniqTags,
        id: 'custom-tags-node',
        parent: null,
        children: [],
        internal: {
          type: 'customTagsNode',
          contentDigest: crypto
            .createHash('md5')
            .update(JSON.stringify(uniqTags))
            .digest('hex'),
          mediaType: 'appliction/json',
          content: JSON.stringify(uniqTags),
          description: 'custom tags node'
        }
      })
      
      edges.forEach(({
        node,
        next,
        previous
      }) => {
        const preSlug = previous ? previous.fields.slug : ''
        const nextSlug = next ? next.fields.slug : ''
        // 创建文章内容页
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/BlogPost.jsx'),
          context: {
            slug: node.fields.slug,
            pre: preSlug,
            next: nextSlug,
            tags: uniqTags
          },
        })
      })
      
      // 创建 Post 分页
      createPaginatedPages({
        edges: edges,
        createPage: createPage,
        pageTemplate: path.resolve('./src/templates/MainPagination.jsx'),
        pageLength: 10,
        pathPrefix: 'posts',
        context: {
          totalCount: totalCount,
          tags: uniqTags,
        }
      })

      let categories = _.groupBy( edges, 'node.fields.category')
      Object.keys(categories).forEach(categoryName => {
        let edegs = categories[categoryName]
        createPaginatedPages({
          edges: edegs,
          createPage: createPage,
          pageTemplate: path.resolve('./src/templates/MainPagination.jsx'),
          pageLength: 10,
          pathPrefix: `categories/${categoryName}`,
          context: {
            totalCount: edegs.length,
            category: categoryName,
          }
        })
      })
      let archives = _.groupBy(edges, function(edge) {
        let postCreatedAt = new Date(edge.node.frontmatter.date)
        return postCreatedAt.getFullYear() + '/' + postCreatedAt.getMonth()
      })
      
      Object.keys(archives).forEach(date => {
        let edegs = archives[date]
        createPaginatedPages({
          edges: edegs,
          createPage: createPage,
          pageTemplate: path.resolve('./src/templates/MainPagination.jsx'),
          pageLength: 10,
          pathPrefix: `archives/${date}`,
          context: {
            totalCount: edegs.length,
            date,
          }
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    mode: 'development',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            devMode ? {
              loader: style_loader,
            } : {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: css_loader,
              options: {
                sourceMap: true,
              },
            },
            {
              loader: less_loader,
              options: {
                strictMath: true,
                javascriptEnabled: true
              }
            },
          ]
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static',
      //   analyzerHost: '127.0.0.1',
      //   analyzerPort: 8888, // 运行后的端口号
      //   reportFilename: 'report.html',
      //   defaultSizes: 'parsed',
      //   openAnalyzer: true,
      //   generateStatsFile: false,
      //   statsFilename: 'stats.json',
      //   statsOptions: null,
      //   logLevel: 'info'
      // }),
    ]
  })
}

