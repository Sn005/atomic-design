// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import AppAnchor from '@/components/atoms/AppAnchor.vue'
import AppTxt from '@/components/atoms/AppTxt/Default.vue'

storiesOf(`atoms/AppAnchor`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { AppAnchor },
      template: `
        <app-anchor href="#">アンカー</app-anchor>
        `
    }
  })
  .add('AppTxtとの組み合わせ', () => {
    return {
      components: { AppAnchor, AppTxt },
      template: `
        <app-anchor href="#"><app-txt>AppTxtとの組み合わせ</app-txt></app-anchor>
      `
    }
  })
