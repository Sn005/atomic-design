<template lang='pug'>
  sticky-header-layout
    app-header(
      :navigations="navigations"
      slot="sticky"
    )
    main.main(
      slot="body"
    )
      page-header(
        :navigations="breadcrumb"
      )
      notification-list.notifications(
        :programs="notifications"
        @on-click-delete="onClickDelete"
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
  },
  methods: {
    onClickDelete (program) {
      this.$emit('on-click-delete', program)
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";
.main {
  box-sizing: border-box;
  padding: ($space* 8) ($space * 2) $space;
}

.notifications {
  border: $border;
  border-width: 1px 0;
  margin-top: ($space * 2);
}

</style>]
