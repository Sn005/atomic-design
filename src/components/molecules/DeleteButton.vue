<template lang='pug'>
  div.delete-button
    trash-can-icon.delete-button__icon(clickable)
    div.delete-button__balloon
      balloon 削除する
</template>
<script>
import TrashCanIcon from '@components/atoms/Icons/TrashCanIcon.vue'
import Balloon from '@components/atoms/Balloon.vue'
export default {
  name: 'DeleteButton',
  components: {TrashCanIcon, Balloon}
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
