// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Img from '@/components/atoms/Img.vue'

storiesOf(`atoms/Imgs`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', () => {
    const src = text('Src', 'https://placehold.jp/150x150.png')
    const alt = text('Alt', 'サンプル画像です')
    const width = number('Width', '150')
    const height = number('Height', '150')
    return {
      components: { Img },
      template: `
          <Img src="${src}" alt="${alt}" width="${width}" height="${height}" />
      `
    }
  })
