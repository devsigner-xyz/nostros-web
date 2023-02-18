module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: '> 1%, not IE 11, not dead',
        },
      },
    ],
  ],
};
