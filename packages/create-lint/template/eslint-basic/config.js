module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', '@hovey/eslint-config-basic@workspace'],
    configFile: ['base/.prettierignore', 'base/.prettierrc.js', 'base/.eslintignore', 'eslint-basic/.eslintrc.js'],
  }
}
