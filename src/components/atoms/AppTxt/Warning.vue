<template lang='pug'>
  component.warning(
    :is="tag"
    :class="size"
  )
    slot デフォルトテキストが入ります
</template>
<script>
export default {
  name: 'WarningTxt',
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
.warning { color: #f0163a; }
</style>
