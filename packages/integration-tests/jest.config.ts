import buildConfig from '../../jest.config'
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  ...buildConfig(__dirname),
  testEnvironment: '@runtime-edge/jest-environment',
}
export default config
