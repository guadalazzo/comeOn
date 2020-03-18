 const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    devtool: 'inline-source-map',
    output: {

      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }]
    },
    devServer: {
      historyApiFallback: true,
      contentBase:  path.resolve(__dirname, 'dist'),
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html" //source html
      })
    ]
  };