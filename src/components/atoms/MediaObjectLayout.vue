<template lang='pug'>
  component.container(
    :is="tag"
  )
    div
      slot(name="media")
    div.body
      slot(name="body")
</template>
<script>
export default {
  name: 'MediaObjectLayout',
  props: {
    tag: {
      type: String,
      default: 'div',
      validator (val) {
        return ['div', 'section'].includes(val)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.container{
  display: flex;
}
.body{
    flex: 1;
    min-width: 0;
}
</style>
