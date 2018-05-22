// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Heading from '@components/atoms/Heading.vue'

storiesOf(`atoms/Heading`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => ({
    components: { Heading },
    template: `<Heading>デフォルト</Heading>`
  }))
  .add('見出しレベル1、見た目2', () => ({
    components: { Heading },
    template: `<Heading level="1" visualLevel="2">見出しレベル1、見た目2</Heading>`
  }))
  .add('見出しレベル2', () => ({
    components: { Heading },
    template: `<Heading level="2">見出しレベル2</Heading>`
  }))
  .add('見出しレベル3', () => ({
    components: { Heading },
    template: `<Heading level="3">見出しレベル3</Heading>`
  }))
  .add('見出しレベル4', () => ({
    components: { Heading },
    template: `<Heading level="4">見出しレベル4</Heading>`
  }))
  .add('見出しレベル5', () => ({
    components: { Heading },
    template: `<Heading level="5">見出しレベル5</Heading>`
  }))
  .add('見出しレベル6', () => ({
    components: { Heading },
    template: `<Heading level="6">見出しレベル6</Heading>`
  }))
  .add('カスタム', () => {
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
