const path = require('path')

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      src: path.resolve('src'),
    },
    html: {
      mountId: 'root',
      favicon: 'public/favicon.ico'
    },
    rules: {
      css: {
        modules: true,
        localIdentName: ('[local]--[hash:base64:5]')
      },
      postcss: {
        plugins: [
          require('postcss-cssnext')
        ]
      }
    },
    extra: {
      resolve: {
        plugins: [
          new (require('directory-named-webpack-plugin'))()
        ]
      }
    }
  }
}
