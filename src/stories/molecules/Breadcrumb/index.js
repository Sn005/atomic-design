// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import Breadcrumb from '@/components/molecules/Breadcrumb.vue'

storiesOf(`molecules/Breadcrumb`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { Breadcrumb },
      data () {
        return {
          items: [
            { label: 'トップ', url: '#' },
            { label: '通知番組', url: '#' }
          ]
        }
      },
      template: `
          <breadcrumb :items="items" />
      `
    }
  })
