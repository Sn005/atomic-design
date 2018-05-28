// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MailAuthForm from '@/components/molecules/MailAuthForm.vue'

storiesOf(`molecules/MailAuthForm`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { MailAuthForm },
      template: `
          <mail-auth-form @on-submit="action" />
      `,
      methods: { action: action('button-clicked') }
    }
  })
