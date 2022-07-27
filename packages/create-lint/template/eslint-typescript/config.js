module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@hovey/eslint-config-typescript'],
    configFile: ['base/.prettierignore', 'base/.prettierrc.js', 'base/.eslintignore', 'eslint-typescript/.eslintrc.js'],
  }
}
