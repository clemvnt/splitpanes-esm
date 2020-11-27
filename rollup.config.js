import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'

export default {
  input: 'node_modules/splitpanes/src/components/splitpanes/index.js',
  output: {
    file: 'dist/splitpanes.js',
    format: 'es'
  }, 
  plugins: [
    vue(),
    scss()
  ],
  external: ['vue']
}