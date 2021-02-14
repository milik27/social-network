import webpack from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { build } from './config/paths'

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
      '@src': './src',
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
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
    new Dotenv(),
  ],
  devServer: {
    contentBase: build,
    compress: true,
    port: 3000,
  },
}

export default config
