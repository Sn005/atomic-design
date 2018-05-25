<template lang='pug'>
  component.h.underlined(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Presenter from './Presenter.vue'
export default {
  name: 'HeadingUnderlined',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang='scss'>
.underlined{
  padding-bottom: 8px;
  border-bottom: 2px solid #ccc;
}
</style>
