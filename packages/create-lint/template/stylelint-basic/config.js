module.exports = () => {
  return {
    pkg: ['stylelint', 'prettier', 'postcss', '@hovey/stylelint-config-basic'],
    configFile: [
      'base/.prettierignore',
      'base/.prettierrc.js',
      'base/.stylelintignore',
      'stylelint-basic/.stylelintrc.js',
    ],
  }
}
