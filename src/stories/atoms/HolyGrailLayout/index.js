// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import HolyGrailLayout from '@/components/atoms/HolyGrailLayout.vue'
storiesOf(`atoms/HolyGrailLayout`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { HolyGrailLayout },
      template: `
          <holy-grail-layout>
            <header slot="top" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">
              header
            </header>
            <main slot="main" :style="{ minHeight:'300px', backgroundColor: '#777'}">main</main>
            <nav slot="left" :style="{ minHeight:'150px', backgroundColor: '#aaa'}">left</nav>
            <aside slot="right" :style="{ minHeight:'100px', backgroundColor: '#aaa'}">right</aside>
            <footer slot="bottom" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">right</footer>
          </holy-grail-layout>
      `
    }
  })
