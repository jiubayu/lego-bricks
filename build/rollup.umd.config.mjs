import fs from 'fs';
import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import pkg from '../package.json' assert {type: 'json'};
const {name} = pkg;
const file = (type) => `dist/${name}.${type}.js`;

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
};

export default {
  input: 'src/index.ts',
  output: {
    name: 'LegoComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'Vue',
      'lodash-es': '_',
    },
    exports: 'named',
  },
  plugins: [
    vuePlugin(),
    nodeResolve(),
    excludeDependenciesFromBundle({
      peerDependencies: true,
      dependencies: false,
    }),
    typescript({tsconfigOverride: overrides}),
    json(),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist');
        fs.writeFileSync(`dist/${name}.css`, style);
      },
    }),
  ],
};
