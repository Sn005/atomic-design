<template lang='pug'>
  div.root
    breadcrumb(
      :items="navigations"
    )
</template>
<script>
import Breadcrumb from '@/components/molecules/Breadcrumb.vue'
export default {
  name: 'PageHeader',
  components: {
    Breadcrumb
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
  padding: calc($space * 2);
}

</style>
