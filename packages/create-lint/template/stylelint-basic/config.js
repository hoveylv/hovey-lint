module.exports = () => {
  return {
    pkg: ['stylelint', 'prettier', 'postcss', '@hovey/stylelint-config-basic@workspace'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc.js',
    ],
  }
}
