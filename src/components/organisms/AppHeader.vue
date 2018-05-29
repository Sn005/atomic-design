<template lang='pug'>
  div.root
    navigation(
      :items="navigations"
    )
</template>
<script>
import Navigation from '@/components/molecules/Navigation.vue'
export default {
  name: 'AppHeader',
  components: {
    Navigation
  },
  props: {
    navigations: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";

.root {
  padding: $space * 2;
  background-color: $color-header;
  color: $color-text-outlined;
}
</style>
