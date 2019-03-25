module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'bundle.js'
  },
  mode: "development",
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|mp3)$/i,
          use: ['file-loader']
        }, 
        {
          test: /\.ico$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]'
                  }
              }
          ]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 1000,
                      mimetype: 'application/font-woff'
                  }
              }

          ]
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
    },
  devServer: {
      port: 3000
  }
};