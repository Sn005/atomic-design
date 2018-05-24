// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import AppTime from '@/components/atoms/AppTime.vue'

storiesOf(`atoms/Time`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', () => {
    return {
      components: { AppTime },
      template: `
          <app-time :time="1527066223"/>
      `
    }
  })
  .add('無効な時間表現', () => {
    return {
      components: { AppTime },
      template: `
          <app-time time=""/>
      `
    }
  })
