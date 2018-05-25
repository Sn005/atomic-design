<template lang='pug'>
  component.default(
    :is="tag"
    :class="size"
  )
    slot デフォルトテキストが入ります
</template>
<script>
export default {
  name: 'AppTxt',
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
@import "./styles.scss";
.default { color: #000; }
</style>
