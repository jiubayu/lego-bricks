
<template>
  <img
    :src="imageSrc"
    :style="styleProps"
    class="l-image-component"
    @click.prevent="handleClick"
  />
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from '../../defaultProps';
import useComponentCommon from '../../hooks/useComponentCommon';
const defaultProps = transformToComponentProps(imageDefaultProps);
export default defineComponent({
  name: 'LImage',
  props: defaultProps,
  setup(props) {
    const {styleProps, handleClick} = useComponentCommon(
      props,
      imageStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
}
</style>
