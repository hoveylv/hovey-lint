module.exports = () => {
  return {
    pkg: ['eslint', 'prettier', 'typescript', '@hovey/eslint-config-vue'],
    configFile: ['base/.prettierignore', 'base/.prettierrc.js', 'base/.eslintignore', 'eslint-vue/.eslintrc.js'],
  }
}
