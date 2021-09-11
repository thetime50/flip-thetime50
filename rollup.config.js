// import { terser } from 'rollup-plugin-terser'

// Due to bug [Breaks with multiple outputs](https://github.com/TrySound/rollup-plugin-terser/issues/5) I had to create multiple configuration instead of a simpler one.

export default [
  {
    input: 'src/flip.js',
    output: {
      format: 'es',
      file: 'lib/flip-thetime50.es.js'
    },
    // plugins: [ terser() ]
  },
  {
    input: 'src/flip.js',
    output: {
      format: 'cjs',
      file: 'lib/flip-thetime50.cjs.js',
      exports:'default'
    },
    // plugins: [ terser() ]
  }
]