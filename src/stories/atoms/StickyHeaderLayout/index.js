// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import StickyHeaderLayout from '@/components/atoms/StickyHeaderLayout.vue'
storiesOf(`atoms/StickyHeaderLayout`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { StickyHeaderLayout },
      template: `
          <sticky-header-layout>
            <div slot="sticky" :style="{ height:'50px', color: 'white', backgroundColor: 'black'}">
              ヘッダー
            </div>
            <div slot="body" :style="{ height:'150vh', color: 'white', backgroundColor: '#ddd'}">本体</div>
          </media-object-layout>
      `
    }
  })
