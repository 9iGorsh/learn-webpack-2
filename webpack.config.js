const path = require('path')
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const HtmlWebpackplugin =require('html-webpack-plugin')
const { CleanWebpackPlugin } =require('clean-webpack-plugin')
const WebpackManifestPlugin =require('webpack-manifest-plugin')
const currentTask =process.env.npm_lifecycle_event

const config ={
  entry: './app/app.js',
  output: {
    filename: 'myBundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackplugin({template: './app/index.html'})],
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss$|css$)/, 
        use: ['style-loader','css-loader','sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: () => [
                require('autoprefixer')
              ]
            }
          }
        }
      ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: [['@babel/preset-env',{
              'useBuiltIns':'usage',
              'corejs':3,
              'targets':'defaults'
              }],'@babel/preset-react']
          }
        }
      }
    ]
  }
}

if(currentTask =='build'){
  config.mode ='production'
  config.module.rules[0].use[0] =MiniCssExtractPlugin.loader
  config.plugins.push(
    new MiniCssExtractPlugin({filename: 'main.[hash].css'}), 
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
    )
}

module.exports = config