// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import AppIcon from '@/components/atoms/AppIcon/Default.vue'
import TrashCanIcon from '@/components/atoms/AppIcon/TrashCanIcon.vue'

storiesOf(`atoms/Icons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('ゴミ箱アイコン', () => {
    return {
      components: { TrashCanIcon },
      template: `
        <trash-can-icon />
        `
    }
  })
  .add('カスタム', () => {
    const name = text('アイコン名', 'trash-can')
    const clickable = boolean('クリッカブル', false)
    return {
      components: { AppIcon },
      template: `
          <app-icon :clickable="${clickable}" name="${name}" />
      `
    }
  })
