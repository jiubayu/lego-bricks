import basicConfig, {name, file} from './rollup.config.mjs';
import vue from 'rollup-plugin-vue';

basicConfig.plugins.push(vue({css: false, template: {optimizeSSR: true}}));

export default {
  ...basicConfig,
  output: {
    name,
    file: file('umd'),
    format: 'umd',
  },
};
