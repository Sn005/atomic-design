// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import {
  notifications,
  navigations,
  breadcrumb
} from '@/mock/data.js'

import NotificationListTemplate from '@/components/templates/NotificationListTemplate.vue'

storiesOf(`templates/NotificationListTemplate`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { NotificationListTemplate },
      data () {
        return {
          notifications: notifications,
          navigations: navigations,
          breadcrumb: breadcrumb
        }
      },
      template: `
          <notification-list-template
            :notifications="notifications"
            :navigations="navigations"
            :breadcrumb="breadcrumb"
            @on-click-delete="onClickDelete"
          />
      `,
      methods: { onClickDelete: action('削除ボタンがクリックされました') }
    }
  })
