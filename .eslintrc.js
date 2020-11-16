module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'node-opinionated',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
  ],
  plugins: ['jest', 'fp', 'promise', 'unicorn'],
  overrides: [
    {
      files: ['**/src/**'],
      extends: [
        'plugin:unicorn/recommended',
        'plugin:fp/recommended',
      ],
      rules: {
        'fp/no-unused-expression': 'off',
        'fp/no-nil': 'off',
        'fp/no-mutation': ['warn', {
          'commonjs': true,
          'allowThis': true,
          'exceptions': [],
        }],
        'unicorn/no-null': 'off',
      },
    },
    {
      files: ['**/tests/**', '**/fixtures/**', '**/runners/**'],
      rules: {
        'max-nested-callbacks': ['warn', 3],
        'max-lines': ['warn', 200],
        'no-console': 'off',
        'no-sync': 'off',
        'node/no-unpublished-require': 'off',
        'jest/expect-expect': 'off',
        'jest/no-done-callback': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
}
