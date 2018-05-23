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
  name: 'TrashIcon',
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
    }
  },
  computed: {
    iconPath () {
      return require('./../../../assets/icons/trash-can.svg')
    }
  }
}
</script>
<style lang="scss" scoped>
.clickable{
  cursor: pointer;
}
</style>
