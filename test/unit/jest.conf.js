const path = require('path')

module.exports = {
  // globals: {
  //   __TRANSFORM_HTML__: true
  // },
  rootDir: path.resolve(__dirname, '../../'),
  // moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    // '/node_modules/(?!(@storybook/.*\\.vue$))'
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
