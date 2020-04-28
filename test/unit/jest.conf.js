const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "transform": {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer'],
  setupFiles: ['<rootDir>/test/unit/setupTest'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}