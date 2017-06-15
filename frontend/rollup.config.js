import svelte from 'rollup-plugin-svelte'
import closure from 'rollup-plugin-closure-compiler-js'
import filesize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'

const plugins = [svelte()]


if (process.env.production) {
  plugins.push(
    babel({
      exclude: 'node_modules/**',
      presets: [['env', {modules: false}]],
      plugins: ["external-helpers"]
    }),
    closure({ compilationLevel: 'ADVANCED' }),
    filesize()
  )
}

export default {
  entry: 'src/main.js',
  dest: 'dist/app.js',
  format: 'iife',
  plugins,
  sourceMap: true
}
