import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
import { vue } from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const mergedConfig = mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
  })
)

mergedConfig.plugins.push(
  vue(),
  vuetify()
)

export default mergedConfig