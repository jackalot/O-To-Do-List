const { dirname } = require('path');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
     // add it right here. And you can add multiple if needed.
     // for example, we'll also handle the 'util' message:
   resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/"), /* or if you install it, use the require.resolve("util/") */
    }
  },
};