// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Txt from '@components/atoms/Txt/Default.vue'
import InfoTxt from '@components/atoms/Txt/Info.vue'
import WarningTxt from '@components/atoms/Txt/Warning.vue'
// import HeadingUnderlined from '@components/atoms/Heading/Underlined.vue'

storiesOf(`atoms/Txt`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('テキスト -S', () => ({
    components: { Txt },
    template: `<txt tag="div" size="s">テキストを表示</txt>`
  }))
  .add('テキスト -M', () => ({
    components: { Txt },
    template: `<txt size="m">テキストを表示</txt>`
  }))
  .add('テキスト -L', () => ({
    components: { Txt },
    template: `<txt size="l">テキストを表示</txt>`
  }))
  .add('情報テキスト -S', () => ({
    components: { InfoTxt },
    template: `<info-txt size="s">テキストを表示</txt>`
  }))
  .add('情報テキスト -M', () => ({
    components: { InfoTxt },
    template: `<info-txt size="m">テキストを表示</txt>`
  }))
  .add('情報テキスト -L', () => ({
    components: { InfoTxt },
    template: `<info-txt size="l">テキストを表示</txt>`
  }))
  .add('警告テキスト -S', () => ({
    components: { WarningTxt },
    template: `<warning-txt size="s">テキストを表示</txt>`
  }))
  .add('警告テキスト -M', () => ({
    components: { WarningTxt },
    template: `<warning-txt size="m">テキストを表示</txt>`
  }))
  .add('警告テキスト -L', () => ({
    components: { WarningTxt },
    template: `<warning-txt size="l">テキストを表示</txt>`
  }))
  .add('テキスト -カスタム', () => {
    const tag = select('タグ', ['span', 'p', 'div'], 'p')
    const size = select('サイズ', ['s', 'm', 'l'], 'm')
    const txt = text('内部テキスト', 'テキストを表示')
    return {
      components: { Txt },
      template: `
          <txt :tag="${tag}" :size="${size}">${txt}</txt>
      `
    }
  })
