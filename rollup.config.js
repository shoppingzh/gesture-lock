import ts from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'index.js',
    format: 'esm',
    name: 'GestureLock'
  },
  external: [
    /^lodash/
  ],
  plugins: [
    ts()
  ]
}
