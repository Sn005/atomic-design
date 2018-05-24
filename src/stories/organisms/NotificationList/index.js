// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import NotificationList from '@/components/organisms/NotificationList.vue'
storiesOf(`organisms/NotificationList`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { NotificationList },
      data () {
        return {
          programs: [
            {
              id: 0,
              thumbnail: 'https://placehold.jp/128x72.png',
              title: 'コンポーネント指向でUIを設計しよう！第1話',
              channelName: 'UIチャンネル',
              startAt: 1507032000000,
              endAt: 1507035600000
            },
            {
              id: 1,
              thumbnail: 'https://placehold.jp/128x72.png',
              title: 'コンポーネント指向でUIを設計しよう！第2話',
              channelName: 'UIチャンネル',
              startAt: 1507032000000,
              endAt: 1507035600000
            },
            {
              id: 2,
              thumbnail: 'https://placehold.jp/128x72.png',
              title: 'コンポーネント指向でUIを設計しよう！第3話',
              channelName: 'UIチャンネル',
              startAt: 1507032000000,
              endAt: 1507035600000
            },
            {
              id: 3,
              thumbnail: 'https://placehold.jp/128x72.png',
              title: 'コンポーネント指向でUIを設計しよう！第4話',
              channelName: 'UIチャンネル',
              startAt: 1507032000000,
              endAt: 1507035600000
            },
            {
              id: 4,
              thumbnail: 'https://placehold.jp/128x72.png',
              title: 'コンポーネント指向でUIを設計しよう！第5話',
              channelName: 'UIチャンネル',
              startAt: 1507032000000,
              endAt: 1507035600000
            }
          ]
        }
      },
      template: `
        <notification-list :programs="programs" @delete-action="action"/>
      `,
      methods: {
        action: action('削除ボタンがクリックされました')
      }
    }
  })
