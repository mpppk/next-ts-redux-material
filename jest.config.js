module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./setupTests.js']
};
