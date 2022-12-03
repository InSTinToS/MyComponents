// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = MiniCssExtractPlugin.loader

const config = {
  entry: './src/index.ts',
  plugins: [new MiniCssExtractPlugin()],
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js', '...'] },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'index.js' },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/i, loader: 'ts-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: 'asset' },
      { test: /\.css$/i, use: [stylesHandler, 'css-loader', 'postcss-loader'] }
    ]
  }
}

module.exports = () => {
  config.mode = isProduction ? 'production' : 'development'

  return config
}
