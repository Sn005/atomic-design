// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Heading from '@components/atoms/Heading/Default.vue'
import HeadingUnderlined from '@components/atoms/Heading/Underlined.vue'

storiesOf(`atoms/Heading`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => ({
    components: { Heading },
    template: `<Heading>デフォルト</Heading>`
  }))
  .add('見出しレベル1、見た目2', () => ({
    components: { Heading },
    template: `<Heading :level="1" :visualLevel="2">見出しレベル1、見た目2</Heading>`
  }))
  .add('見出しレベル2', () => ({
    components: { Heading },
    template: `<Heading :level="2">見出しレベル2</Heading>`
  }))
  .add('見出しレベル3', () => ({
    components: { Heading },
    template: `<Heading :level="3">見出しレベル3</Heading>`
  }))
  .add('見出しレベル4', () => ({
    components: { Heading },
    template: `<Heading :level="4">見出しレベル4</Heading>`
  }))
  .add('見出しレベル5', () => ({
    components: { Heading },
    template: `<Heading :level="5">見出しレベル5</Heading>`
  }))
  .add('見出しレベル6', () => ({
    components: { Heading },
    template: `<Heading :level="6">見出しレベル6</Heading>`
  }))
  .add('下線付き', () => ({
    components: { HeadingUnderlined },
    template: `<HeadingUnderlined>下線付き</HeadingUnderlined>`
  }))
  .add('下線付き 見出しレベル1', () => ({
    components: { HeadingUnderlined },
    template: `<HeadingUnderlined :level="1">下線付き 見出しレベル1</HeadingUnderlined>`
  }))
  .add('下線付き 見出しレベル2', () => ({
    components: { HeadingUnderlined },
    template: `<HeadingUnderlined :level="2">下線付き 見出しレベル2</HeadingUnderlined>`
  }))
  .add('下線付き 見出しレベル1 見た目2', () => ({
    components: { HeadingUnderlined },
    template: `<HeadingUnderlined :level="2" :visualLevel="2">下線付き 見出しレベル1 見た目2</HeadingUnderlined>`
  }))
  .add('カスタム', () => {
    const level = number('Level', 1)
    const visualLevel = number('VisualLevel', 1)
    const txt = text('Txt', 'デフォルトテキストが入ります')
    return {
      components: { Heading },
      template: `
          <Heading :level="${level}" :visualLevel="${visualLevel}">${txt}</Heading>
      `
    }
  })
