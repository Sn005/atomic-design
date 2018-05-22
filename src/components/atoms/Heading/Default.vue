<template lang='pug'>
  component.h(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Container from './Container.js'
export default {
  name: 'Heading',
  mixins: [Container]
}
</script>
<style scoped lang='scss'>
@import "./styles.scss";
</style>
