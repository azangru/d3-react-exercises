module.exports = {
  presets: [
    '@babel/react',
    '@babel/typescript',
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread'
  ]
};
