module.exports = {
  preset: "ts-jest",
  /** @link https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths */
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/test/'],
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      tsconfig: './tsconfig.test.json'
    }
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
