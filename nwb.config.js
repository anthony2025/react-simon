const path = require('path')

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      src: path.resolve('src')
    },
    rules: {
      css: {
        modules: true,
        localIdentName: '[local]--[hash:base64:5]'
      }
    }
  }
}
