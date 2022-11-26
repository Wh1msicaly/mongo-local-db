
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json'

export default {
  input: 'main.js',
  output: [{
    file: `build/mongo-local-db-${pkg.version}.js`,
    name: 'mongo-local-db',
    format: 'es',
    sourcemap: true
  }, {
    file: `build/mongo-local-db-${pkg.version}.min.js`,
    format: 'es',
    name: 'mongo-local-db',
    plugins: [terser()],
    sourcemap: true
  }],
plugins: [json(),nodeResolve(),commonjs()]
};