<template lang='pug'>
  component.info(
    :is="tag"
    :class="size"
  )
    slot デフォルトテキストが入ります
</template>
<script>
export default {
  name: 'InfoTxt',
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
.info { color: #8C8C8C; }
</style>
