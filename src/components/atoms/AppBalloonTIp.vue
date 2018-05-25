<template lang='pug'>
  hover-tip-interaction
    slot(
      slot="marker"
    )
    app-balloon(
      slot="tip"
    ) slot(name="balloon")
</template>
<script>
import AppBalloon from '@/components/atoms/AppBalloon.vue'
import HoverTipInteraction from '@/components/atoms/HoverTipInteraction.vue'
export default {
  name: 'AppBalloonTip',
  components: {
    AppBalloon,
    HoverTipInteraction
  }
}
</script>
<style scoped lang='scss'>
</style>
