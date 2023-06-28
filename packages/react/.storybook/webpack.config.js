const path = require('path');

module.exports = ({ config }) => {
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
              '@babel/preset-typescript' // Agrega este preset para soportar TypeScript
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
  
  config.resolve.modules.push(path.resolve(__dirname, '..'));
  config.resolve.extensions.push('.ts', '.tsx'); // Asegúrate de que webpack pueda resolver estos tipos de archivos
  
  return config;
};
