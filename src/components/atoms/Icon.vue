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
  data () {
    return {
      width: 20,
      height: 20
    }
  },
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPath () {
      return require(`./../../assets/icons/${this.name}.svg`)
    }
  }
}
</script>
<style lang="scss" scoped>
.clickable{
  cursor: pointer;
}
</style>
