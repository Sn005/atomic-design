// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Heading from '@components/atoms/Heading.vue'

storiesOf(`atoms/Heading`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('レベル1　見た目1', () => {
    const level = number('Label', '1')
    const visualLevel = number('VisualLevel', '1')
    const txt = text('Txt', 'デフォルトテキストが入ります')
    return {
      components: { Heading },
      template: `
          <Heading level="${level}" visualLevel="${visualLevel}">${txt}</Heading>
      `
    }
  })
