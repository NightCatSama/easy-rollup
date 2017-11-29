module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "ENV": true
  },
  "extends": 'standard',
  "parserOptions": {
    "sourceType": 'module'
  },
  "rules": {
    "indent": ['error', 2],
    "linebreak-style": ['error', 'unix'],
    "quotes": ['error', 'single'],
    "no-undef": ['off'],
    "no-console": ['off'],
    "semi": ['error', 'never']
  }
}
