import webpack from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { build, srcPath } from './config/paths'

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@src': srcPath,
    },
  },
  output: {
    path: build,
    filename: "bundle.[hash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      hash: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv(),
  ],
  devServer: {
    contentBase: build,
    port: 3001,
    overlay: {
      warnings: true,
      errors: true,
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map'
}

export default config
