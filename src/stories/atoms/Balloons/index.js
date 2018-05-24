// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import AppBalloon from '@/components/atoms/AppBalloon.vue'

storiesOf(`atoms/Balloons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('delete', () => {
    const label = text('Label', '削除しました')
    return {
      components: { AppBalloon },
      template: `
          <app-balloon>${label}</app-balloon>
      `
    }
  })
