<template lang='pug'>
  img(
    :src="iconPath"
    :width="width"
    :height="height"
    :class="{ clickable: clickable }"
  )
</template>
<script>
export default {
  name: 'Icon',
  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      width: 20,
      height: 20
    }
  },
  computed: {
    iconPath () {
      return require(`./../../../assets/icons/${this.name}.svg`)
    }
  }
}
</script>
<style scoped lang='scss'>
.clickable{
  cursor: pointer;
}
</style>
