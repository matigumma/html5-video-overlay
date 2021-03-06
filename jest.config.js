module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules|dist|build/'],
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
