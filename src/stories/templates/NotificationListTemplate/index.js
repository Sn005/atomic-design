// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import NotificationListTemplate from '@/components/templates/NotificationListTemplate.vue'

storiesOf(`templates/NotificationListTemplate`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { NotificationListTemplate },
      data () {
        return {
          navigations: [
            { label: 'ホーム', url: '#' },
            { label: '番組表', url: '#' },
            { label: '通知番組', url: '#', current: true },
            { label: 'お知らせ', url: '#' },
            { label: '設定', url: '#' }
          ]
        }
      },
      template: `
          <app-header :navigations="navigations" />
      `
    }
  })
