// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import DeleteButton from '@components/molecules/DeleteButton.vue'

storiesOf(`molecules/DeleteButton`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { DeleteButton },
      template: `
          <delete-button @click.native="action" />
      `,
      methods: { action: action('button-clicked') }
    }
  })
