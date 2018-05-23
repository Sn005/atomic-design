<template lang='pug'>
  component.h(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Container from './Presenter.vue'
export default {
  name: 'Heading',
  mixins: [Container],
  props: {
    level: {
      type: Number,
      default: 1
    },
    visualLevel: {
      type: Number
    }
  }
}
</script>
<style scoped lang='scss'>
@import "./styles.scss";
</style>
