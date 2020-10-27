const typescript = require('@rollup/plugin-typescript')
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ]
}
