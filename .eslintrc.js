module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'no-restricted-globals': 'off',
        'no-alert': 'off',
      }
    },
    {
      files: ['*.ts'],
      rules: {
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
