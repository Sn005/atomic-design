// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import AppTextBox from '@/components/atoms/AppTextBox.vue'

storiesOf(`atoms/TextBox`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', () => {
    return {
      components: { AppTextBox },
      template: `
          <app-text-box/>
      `
    }
  })
