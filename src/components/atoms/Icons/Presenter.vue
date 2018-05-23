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
  computed: {
    iconPath () {
      return require(`./../../../assets/icons/${this.name}.svg`)
    }
  }
}
</script>
