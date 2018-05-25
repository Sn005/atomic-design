<template lang='pug'>
  component.state(
    :is="tag"
    :class="size"
  )
    slot デフォルトテキストが入ります
</template>
<script>
export default {
  name: 'TxtPresenter',
  props: {
    tag: {
      type: String,
      default: 'p',
      validator (val) {
        return ['div', 'p', 'span'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'm'
    }
  }
}
</script>
<style scoped lang='scss'>
.s { font-size: .8rem; }
.m { font-size:  1rem; }
.l { font-size: 1.2rem; }
</style>
