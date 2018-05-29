// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import PageHeader from '@/components/organisms/PageHeader.vue'

storiesOf(`organisms/PageHeader`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { PageHeader },
      data () {
        return {
          navigations: [
            { label: 'トップ', url: '#' },
            { label: '通知番組', url: '#' }
          ]
        }
      },
      template: `
          <page-header :navigations="navigations" />
      `
    }
  })
