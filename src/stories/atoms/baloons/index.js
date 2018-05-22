// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import Balloon from '@components/atoms/Balloon.vue'

storiesOf(`atoms/balloons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('delete', () => {
    const label = text('Label', '削除しました')
    return {
      components: { Balloon },
      template: `
          <Balloon label="${label}"></Balloon>
      `
    }
  })
