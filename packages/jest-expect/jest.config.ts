import buildConfig from '../../jest.config'
import type { Config } from '@jest/types'

const config: Config.InitialOptions = buildConfig(__dirname)
config.testEnvironment = '@runtime-edge/jest-environment'
config.setupFilesAfterEnv = ['./dist']
export default config
