<template>
  <div class="final-page" :style="page && page.props"> 
    <div v-for="item in components" :key="item.id" :id="`component-${item.id}`">
      <component :is="item.name" v-bind="item.props"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PageData, ComponentData } from '../../defaultProps';
export default defineComponent({
  name: 'FinalPage',
  props: {
    page: {
      type: Object as PropType<PageData>,
    },
    components: {
      type: Object as PropType<ComponentData[]>,
      required: true,
    }
  }
})
</script>
