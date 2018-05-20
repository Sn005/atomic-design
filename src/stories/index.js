// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AppButton from '../components/AppButton.vue'

storiesOf('AppButton', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('with some Addons', () => {
    const label = text('Label', 'BUTTON')
    return {
      components: { AppButton },
      template: `
          <AppButton
            @click="handleClick"
          >${label}</AppButton>
      `,
      methods: {
        handleClick: linkTo('SomeComponent')
      }
    }
  })
