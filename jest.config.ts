import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts']
}

export default config
