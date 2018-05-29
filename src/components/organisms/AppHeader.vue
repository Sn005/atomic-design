<template lang='pug'>
  div.root
    navigation(
      :items="navigation"
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
    navigation: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";

.root {
  padding: calc($space * 2);
  background-color: $color-header;
  color: $color-text-outlined;
}
</style>
