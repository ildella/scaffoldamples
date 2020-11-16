module.exports = {
  verbose: false,
  notify: true,
  notifyMode: 'failure-change, success-change',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  setupFilesAfterEnv: ['./tests/afterEnv.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/main.js',
    '!**/lambda.js',
    '!**/start.js',
  ],
  coverageThreshold: {
    global: {branches: 85, functions: 90, lines: 90, statements: 90}
  },
  coverageReporters: ['text', 'text-summary', 'json', 'json-summary', 'lcov', 'clover', 'html'],
}
