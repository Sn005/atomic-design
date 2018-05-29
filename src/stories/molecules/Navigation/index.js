// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import Navigation from '@/components/molecules/Navigation.vue'

storiesOf(`molecules/Navigation`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { Navigation },
      data () {
        return {
          items: [
            { label: 'ホーム', url: '#' },
            { label: '番組表', url: '#' },
            { label: '通知番組', url: '#', current: true },
            { label: 'お知らせ', url: '#' },
            { label: '設定', url: '#' }
          ]
        }
      },
      template: `
          <navigation :items="items" :style="{ padding:'1rem', backgroundColor: 'black'}"/>
      `
    }
  })
