/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  moduleFileExtensions: ['ts','js'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '**/test/**/*.spec.ts'
  ],
  setupFiles: ['<rootDir>/test/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-after-env.ts']
};
