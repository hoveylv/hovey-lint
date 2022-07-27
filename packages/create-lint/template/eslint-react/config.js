module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@hovey/eslint-config-react'],
    configFile: ['base/.prettierignore', 'base/.prettierrc.js', 'base/.eslintignore', 'eslint-react/.eslintrc.js'],
  }
}
