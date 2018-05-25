<template lang='pug'>
  hover-tip-interaction
    app-trash-can-icon(
      clickable
      slot="root"
    )
    div(
      slot="tip"
    )
      app-balloon 削除する
</template>
<script>
import AppTrashCanIcon from '@/components/atoms/AppIcon/TrashCanIcon.vue'
import AppBalloon from '@/components/atoms/AppBalloon.vue'
import HoverTipInteraction from '@/components/atoms/HoverTipInteraction.vue'
export default {
  name: 'DeleteButton',
  components: {
    AppTrashCanIcon,
    AppBalloon,
    HoverTipInteraction
  }
}
</script>
