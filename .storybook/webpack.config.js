/*
  This config allows Storybook to use its default webpack config, with slight modifications
*/

const path = require('path');

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../stories'),
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    src: path.join(__dirname, '../src')
  };

  return config;
};
