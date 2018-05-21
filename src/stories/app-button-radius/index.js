// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
// import VueInfoAddon from 'storybook-addon-vue-info'

import AppButtonRadius from '../../components/AppButtonRadius.vue'

storiesOf('Atom', module)
  .addDecorator(withKnobs)
  .add('test', () => {
    const label = text('Label', 'Warning')
    return {
      components: { AppButtonRadius },
      template: `<AppButtonRadius label="${label}"/>`
    }
  })
