import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import pkg from '../package.json' assert {type: 'json'};
const { name } = pkg;
const file = (type) => `dist/${name}.${type}.js`;


const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: [
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}

export default {
  input: 'src/index.ts',
  output: {
    name: 'LegoComponents',
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    vuePlugin(),
    nodeResolve(),
    commonjs(),
    typescript({tsconfigOverride: overrides}),
    json(),
    css({output: 'index.css'}),
  ],
  external: ['vue', 'lodash-es'],
};
