// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import AppButton from '@/components/atoms/AppButton/Default.vue'
import AppButtonPrimary from '@/components/atoms/AppButton/Primary.vue'

storiesOf(`atoms/Buttons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { AppButton },
      template: `
          <app-button>デフォルト</app-button>
      `
    }
  })
  .add('プライマリ', () => {
    return {
      components: { AppButtonPrimary },
      template: `
          <app-button-primary>プライマリ</app-button-primary>
      `
    }
  })
