<template lang='pug'>
  component.h(
    :is="tag"
    :class="style"
  )
    slot デフォルトテキストが入ります
</template>
<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      required: true
    },
    visualLevel: {
      type: Number
    }
  },
  computed: {
    formattedLevel () {
      return Math.max(0, Math.min(6, this.level))
    },
    formattedViewLevel () {
      const level = (typeof this.visualLevel !== 'undefined') ? this.visualLevel : this.formattedLevel
      return Math.max(0, Math.min(6, level))
    },
    tag () {
      return `h${this.formattedLevel}`
    },
    style () {
      return `h${this.formattedViewLevel}`
    }
  }
}
</script>
<style scoped lang='scss'>
.h{
  font-weight: 700;
  line-height: 1.5;
}
.h1{
  font-size: 2.0rem;
}
.h2{
  font-size: 1.8rem;
}
.h3{
  font-size: 1.6rem;
}
.h4{
  font-size: 1.4rem;
}
.h5{
  font-size: 1.2rem;
}
.h6{
  font-size: 1rem;
}
</style>
