<template lang='pug'>
  component.h.underlined(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Container from './Container.js'
export default {
  name: 'HeadingUnderlined',
  mixins: [Container]
}
</script>
<style scoped lang='scss'>
@import "./styles.scss";
.underlined{
  padding-bottom: 8px;
  border-bottom: 2px solid #ccc;
}
</style>
