<template lang='pug'>
  component.state(
    :is="tag"
  )
    div.sticky
      slot(name="sticky") 固定部分componentが入ります
    div.body
      slot(name="body") body部分componentが入ります
</template>
<script>
export default {
  name: 'StickyHeaderLayout',
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
@import "../../assets/styles/_properties.scss";
.sticky {
  position: fixed;
  width: 100%;
  z-index: $z-header;
}

.body {
  min-height: 100vh;
}

</style>
