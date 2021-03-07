const jest = {
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./config/setupTest.ts'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '\\.svg$': '<rootDir>/__mocks__/svgTransform.ts',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './__mocks__/fileMock.ts',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@src(.*)$': '<rootDir>/src$1',
  },
}

export default jest
