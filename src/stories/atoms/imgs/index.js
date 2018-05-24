// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import AppImg from '@/components/atoms/AppImg.vue'

storiesOf(`atoms/AppImg`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', () => {
    const src = text('Src', 'https://placehold.jp/150x150.png')
    const alt = text('Alt', 'サンプル画像です')
    const width = number('Width', '150')
    const height = number('Height', '150')
    return {
      components: { AppImg },
      template: `
          <app-img src="${src}" alt="${alt}" width="${width}" height="${height}" />
      `
    }
  })
