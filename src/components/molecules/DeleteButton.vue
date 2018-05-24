<template lang='pug'>
  div.delete-button
    app-trash-can-icon.delete-button__icon(clickable)
    div.delete-button__balloon
      app-balloon 削除する
</template>
<script>
import AppTrashCanIcon from '@/components/atoms/AppIcon/TrashCanIcon.vue'
import AppBalloon from '@/components/atoms/AppBalloon.vue'
export default {
  name: 'DeleteButton',
  components: {AppTrashCanIcon, AppBalloon}
}
</script>
<style scoped lang='scss'>
.delete-button{
  $root: #{&};
  display: inline-block;
  position: relative;
  &__balloon{
    display: none;
    position: absolute;
    top: 0;
    left: -50%;
    transform: translate(-22%, -100%)translateY(-12px);
    white-space: nowrap;
  }
  &:hover{
    #{$root}__balloon{
      display: inline-block;
    }
  }
}
</style>
