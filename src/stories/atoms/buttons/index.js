// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import AppButton from '@/components/atoms/AppButton/Default.vue'
import AppButtonPrimary from '@/components/atoms/AppButton/Primary.vue'
import AppButtonWarning from '@/components/atoms/AppButton/Warning.vue'

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
  .add('警告', () => {
    return {
      components: { AppButtonWarning },
      template: `
          <app-button-warning>警告</app-button-warning>
      `
    }
  })
