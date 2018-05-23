// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Icon from '@components/atoms/Icons/Default.vue'
import TrashIcon from '@components/atoms/Icons/TrashIcon.vue'

storiesOf(`atoms/Icons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('ゴミ箱アイコン', () => {
    return {
      components: { TrashIcon },
      template: `
        <trash-icon name="trash-can" />
        `
    }
  })
  .add('カスタム', () => {
    const name = text('アイコン名', 'trash-can')
    const clickable = boolean('クリッカブル', false)
    return {
      components: { Icon },
      template: `
          <Icon :clickable="${clickable}" name="${name}" />
      `
    }
  })
