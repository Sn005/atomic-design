<template lang='pug'>
  notification.item(
    v-for(program in programs)
    :key="program.id"
    :program="program"
    @delete-action="action"
  )
</template>
<script>
import Notification from '@/components/organisms/Notification.vue'
export default {
  name: 'NotificationList',
  components: {Notification},
  props: {
    programs: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
.item{
  &:hover{
    background-color: #f6f6f6;
    & + & {
      border-top: 1px solid #ddd;
    }
  }
}
</style>
