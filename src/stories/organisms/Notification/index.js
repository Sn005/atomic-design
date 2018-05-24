// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Notification from '@/components/organisms/Notification.vue'

storiesOf(`organisms/Notification`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    const mockProgram = {
      id: 0,
      thumbnail: '/mock/images/img01.jpg',
      title: 'コンポーネント指向でUIを設計しよう！第1話',
      channelName: 'UIチャンネル',
      startAt: 1507032000000,
      endAt: 1507035600000
    }
    const test = {
      id: 0
    }
    return {
      components: { Notification },
      template: `
          <notification :test="${test}"/>
      `,
      methods: { action: action('button-clicked') }
    }
  })
