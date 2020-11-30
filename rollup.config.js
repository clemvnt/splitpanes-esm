import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'

export default {
  input: 'node_modules/splitpanes/src/components/splitpanes/index.js',
  output: [
    {
      file: 'dist/splitpanes.esm.js',
      format: 'es'
    }, 
    {
      file: 'dist/splitpanes.cjs.js',
      format: 'cjs'
    }
  ], 
  plugins: [
    vue(),
    scss({ output: 'dist/splitpanes.css' })
  ],
  external: ['vue']
}