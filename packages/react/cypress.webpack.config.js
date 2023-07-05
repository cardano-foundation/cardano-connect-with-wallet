const path = require('path');

module.exports = {
  resolve: {
    alias: {
      utils: path.resolve(__dirname, '../utils'),
      core: path.resolve(__dirname, '../core'),
      global: path.resolve(__dirname, '../global'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
