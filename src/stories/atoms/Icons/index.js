// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import TrashIcon from '@components/atoms/Icons/TrashIcon.vue'

storiesOf(`atoms/Icons`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルトアイコン一覧', () => {
    return {
      components: { TrashIcon },
      template: `
      <TrashIcon />
      `
    }
  })
