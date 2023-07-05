const path = require('path');

module.exports = ({ config }) => {
  
  config.resolve = {
    alias: {
      utils: path.resolve(__dirname, '../../utils'),
      core: path.resolve(__dirname, '../../core'),
      global: path.resolve(__dirname, '../../global'),
    },
    extensions: ['.ts', '.tsx', ...config.resolve.extensions],
    modules: [path.resolve(__dirname, '..'), ...config.resolve.modules],
  };
  
  config.module = {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
  };
  
  return config;
};
