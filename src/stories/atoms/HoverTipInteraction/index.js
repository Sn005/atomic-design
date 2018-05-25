// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import HoverTipInteraction from '@/components/atoms/HoverTipInteraction.vue'

storiesOf(`atoms/HoverTipInteraction`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { HoverTipInteraction },
      template: `
          <hover-tip-interaction>
            <span slot="root">ホバーしてください</span>
            <span slot="tip">チップが表示されます</span>
          </hover-tip-interaction>
      `
    }
  })
  .add('マーカー', () => {
    return {
      components: { HoverTipInteraction },
      template: `
          <hover-tip-interaction>
            <span slot="marker">ホバーしてください</span>
            <span slot="tip">チップが表示されます</span>
          </hover-tip-interaction>
      `
    }
  })
