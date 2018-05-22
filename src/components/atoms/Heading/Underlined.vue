<template lang='pug'>
  component.h.underlined(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Container from './Container.vue'
export default {
  name: 'HeadingUnderlined',
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
.underlined{
  padding-bottom: 8px;
  border-bottom: 2px solid #ccc;
}
</style>
