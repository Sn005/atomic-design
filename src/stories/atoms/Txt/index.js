// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
import AppInfoTxt from '@/components/atoms/AppTxt/Info.vue'
import AppWarningTxt from '@/components/atoms/AppTxt/Warning.vue'
// import HeadingUnderlined from '@components/atoms/Heading/Underlined.vue'

storiesOf(`atoms/Txt`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('テキスト -S', () => ({
    components: { AppTxt },
    template: `<app-txt tag="div" size="s">テキストを表示</txt>`
  }))
  .add('テキスト -M', () => ({
    components: { AppTxt },
    template: `<app-txt size="m">テキストを表示</app-txt>`
  }))
  .add('テキスト -L', () => ({
    components: { AppTxt },
    template: `<app-txt size="l">テキストを表示</app-txt>`
  }))
  .add('情報テキスト -S', () => ({
    components: { AppInfoTxt },
    template: `<app-info-txt size="s">テキストを表示</app-info-txt>`
  }))
  .add('情報テキスト -M', () => ({
    components: { AppInfoTxt },
    template: `<app-info-txt size="m">テキストを表示</app-info-txt>`
  }))
  .add('情報テキスト -L', () => ({
    components: { AppInfoTxt },
    template: `<app-info-txt size="l">テキストを表示</app-info-txt>`
  }))
  .add('警告テキスト -S', () => ({
    components: { AppWarningTxt },
    template: `<app-warning-txt size="s">テキストを表示</app-warning-txt>`
  }))
  .add('警告テキスト -M', () => ({
    components: { AppWarningTxt },
    template: `<app-warning-txt size="m">テキストを表示</app-warning-txt>`
  }))
  .add('警告テキスト -L', () => ({
    components: { AppWarningTxt },
    template: `<app-warning-txt size="l">テキストを表示</app-warning-txt>`
  }))
  .add('テキスト -カスタム', () => {
    const tag = select('タグ', ['span', 'p', 'div'], 'p')
    const size = select('サイズ', ['s', 'm', 'l'], 'm')
    const txt = text('内部テキスト', 'テキストを表示')
    return {
      components: { AppTxt },
      template: `
          <app-txt :tag="${tag}" :size="${size}">${txt}</app-txt>
      `
    }
  })
