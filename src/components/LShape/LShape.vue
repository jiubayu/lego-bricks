
<template>
  <div
    :style="styleProps"
    class="l-shape-component"
    @click="handleClick"
  >
  </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import {
  transformToComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
} from '../../defaultProps';
import useComponentCommon from '../../hooks/useComponentCommon';
const defaultProps = transformToComponentProps(shapeDefaultProps);
export default defineComponent({
  name: 'LShape',
  props: defaultProps,
  setup(props) {
    const {styleProps, handleClick} = useComponentCommon(
      props,
      shapeStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
