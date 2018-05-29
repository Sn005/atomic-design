<template lang='pug'>
  notification-list-template(
    :notifications="notifications"
    :navigations="navigations"
    :breadcrumb="breadcrumb"
    @on-click-delete="onDeleteNotification"
  )
</template>
<script>
import NotificationListTemplate from '@/components/templates/NotificationListTemplate.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NotificationListPage',
  components: {
    NotificationListTemplate
  },
  computed: {
    ...mapState([
      'notifications',
      'navigations',
      'breadcrumb'
    ])
  },
  methods: {
    ...mapActions(['fetch', 'deleteNotification']),
    onDeleteNotification () {
      console.log('test')
    }
  },
  async mounted () {
    await this.fetch()
  }
}
</script>
<style scoped lang='scss'>
</style>
