module.exports = {
  env: {
    node: true, // Specifies that the environment is Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended', // Apply Node.js specific rules
    'prettier', // Use Prettier rules
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
  },
};
