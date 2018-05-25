// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import MediaObjectLayout from '@/components/atoms/MediaObjectLayout.vue'
import AppImg from '@/components/atoms/AppImg.vue'
storiesOf(`atoms/MediaObjectLayout`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { MediaObjectLayout, AppImg },
      template: `
          <media-object-layout>
            <div slot="media">
              <app-img
                src="https://placehold.jp/192x108.png"
                :width="192"
                :height="108"
                alt="MediaObjectLayoutサンプル"
              />
            </div>
            <div slot="body">サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。</div>
          </media-object-layout>
      `
    }
  })
  .add('section指定', () => {
    return {
      components: { MediaObjectLayout, AppImg },
      template: `
          <media-object-layout tag="section">
            <div slot="media">
              <app-img
                src="https://placehold.jp/192x108.png"
                :width="192"
                :height="108"
                alt="MediaObjectLayoutサンプル"
              />
            </div>
            <div slot="body">サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。</div>
          </media-object-layout>
      `
    }
  })
