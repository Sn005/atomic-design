// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import AppHeading from '@/components/atoms/AppHeading/Default.vue'
import AppHeadingUnderlined from '@/components/atoms/AppHeading/Underlined.vue'

storiesOf(`atoms/Heading`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => ({
    components: { AppHeading },
    template: `<app-heading>デフォルト</app-heading>`
  }))
  .add('見出しレベル1、見た目2', () => ({
    components: { AppHeading },
    template: `<app-heading :level="1" :visualLevel="2">見出しレベル1、見た目2</app-heading>`
  }))
  .add('見出しレベル2', () => ({
    components: { AppHeading },
    template: `<app-heading :level="2">見出しレベル2</app-heading>`
  }))
  .add('見出しレベル3', () => ({
    components: { AppHeading },
    template: `<app-heading :level="3">見出しレベル3</app-heading>`
  }))
  .add('見出しレベル4', () => ({
    components: { AppHeading },
    template: `<app-heading :level="4">見出しレベル4</app-heading>`
  }))
  .add('見出しレベル5', () => ({
    components: { AppHeading },
    template: `<app-heading :level="5">見出しレベル5</app-heading>`
  }))
  .add('見出しレベル6', () => ({
    components: { AppHeading },
    template: `<app-heading :level="6">見出しレベル6</app-heading>`
  }))
  .add('下線付き', () => ({
    components: { AppHeadingUnderlined },
    template: `<app-heading-underlined>下線付き</app-heading-underlined>`
  }))
  .add('下線付き 見出しレベル1', () => ({
    components: { AppHeadingUnderlined },
    template: `<app-heading-underlined :level="1">下線付き 見出しレベル1</app-heading-underlined>`
  }))
  .add('下線付き 見出しレベル2', () => ({
    components: { AppHeadingUnderlined },
    template: `<app-heading-underlined :level="2">下線付き 見出しレベル2</app-heading-underlined>`
  }))
  .add('下線付き 見出しレベル1 見た目2', () => ({
    components: { AppHeadingUnderlined },
    template: `<app-heading-underlined :level="2" :visualLevel="2">下線付き 見出しレベル1 見た目2</app-heading-underlined>`
  }))
  .add('カスタム', () => {
    const level = number('Level', 1)
    const visualLevel = number('VisualLevel', 1)
    const txt = text('Txt', 'デフォルトテキストが入ります')
    return {
      components: { AppHeading },
      template: `
          <app-heading :level="${level}" :visualLevel="${visualLevel}">${txt}</app-heading>
      `
    }
  })
