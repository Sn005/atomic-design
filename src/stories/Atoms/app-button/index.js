// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { withNotes } from '@storybook/addon-notes'
import { linkTo } from '@storybook/addon-links'

import AppButton from '@components/AppButton.vue'

import readme from './README.md'

storiesOf('Atom/Buttons', module)
  // .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('test', withInfo(readme)(() => {
    const label = text('Label', 'BUTTON')
    return {
      components: { AppButton },
      template: `
          <AppButton @click="handleClick">${label}</AppButton>
      `,
      methods: {
        handleClick: linkTo('Atom/ButtonRadius')
      }
    }
  }))
