<template lang='pug'>
  sticky-header-layout
    app-header(
      :navigations="navigations"
      slot="sticky"
    )
    main(
      slot="body"
    )
      page-header(
        :navigations="breadcrumb"
      )
      notification-list.notifications(
        :programs="notifications"
        @on-click-delete="$emit('on-click-delete')"
      )
</template>
<script>
import StickyHeaderLayout from '@/components/atoms/StickyHeaderLayout.vue'
import PageHeader from '@/components/organisms/PageHeader.vue'
import AppHeader from '@/components/organisms/AppHeader.vue'
import NotificationList from '@/components/organisms/NotificationList.vue'
export default {
  name: 'NotificationListTemplate',
  components: {
    StickyHeaderLayout,
    PageHeader,
    AppHeader,
    NotificationList
  },
  props: {
    notifications: {
      type: Array,
      required: true
    },
    navigations: {
      type: Array,
      required: true
    },
    breadcrumb: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";
.main {
  box-sizing: border-box;
  padding: calc($space* 8) calc($space * 2) $space;
}

.notifications {
  border: var($border);
  border-width: 1px 0;
  margin-top: calc($space * 2);
}

</style>]
