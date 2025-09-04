module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts'
  ],
  testMatch: [
    '**/tests/**/*.test.ts'
  ]
};