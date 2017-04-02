var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: [
    './src/cyclop'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'cyclop.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};