<template lang='pug'>
  hover-tip-interaction
    slot(
      slot="marker"
    )
    app-balloon(
      slot="tip"
    ) {{ label }}
</template>
<script>
import AppBalloon from '@/components/atoms/AppBalloon.vue'
import HoverTipInteraction from '@/components/atoms/HoverTipInteraction.vue'
export default {
  name: 'AppBalloonTip',
  components: {
    AppBalloon,
    HoverTipInteraction
  },
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
