<template lang='pug'>
  component.h(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
import Presenter from './Presenter.vue'
export default {
  name: 'Heading',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
