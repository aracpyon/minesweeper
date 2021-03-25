const path = require('path');

module.exports = {
   entry: './minesweeper.jsx',
   output: {
      path: path.resolve(__dirname), 
      filename: 'bundle.js'
   },
   devtool: 'source-map',
   resolve: {
      extensions: [".js", ".jsx", "*"]
   }
}