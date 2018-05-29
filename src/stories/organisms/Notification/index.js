// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Notification from '@/components/organisms/Notification.vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
storiesOf(`organisms/Notification`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { Notification, DeleteButton },
      data () {
        return {
          program: {
            id: 0,
            thumbnail: 'https://placehold.jp/128x72.png',
            title: 'コンポーネント指向でUIを設計しよう！第1話',
            channelName: 'UIチャンネル',
            startAt: 1507032000000,
            endAt: 1507035600000
          }
        }
      },
      template: `
        <notification :program="program" @on-click-delete="action"/>
      `,
      methods: {
        action: action('削除ボタンがクリックされました')
      }
    }
  })
