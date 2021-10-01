import { format } from '$src/helpers'
import { rollup, RollupOptions } from 'rollup'
import config from './rollup.config'

process.chdir(__dirname)

test('errors if the manifest is invalid', async () => {
  expect.assertions(1)
  await expect(rollup(config as RollupOptions)).rejects.toEqual(
    new Error(format`There were problems with the extension manifest.
                     - ["service_worker.js"] at "manifest.background.service_worker" must be string`),
  )
})