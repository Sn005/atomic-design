// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import Welcome from './Welcome.vue'

import readme from './README.md'

storiesOf('App', module)
  // .addDecorator(VueInfoAddon)
  .add('welcome', withInfo(readme)(() => {
    return {
      components: { Welcome },
      template: `
          <Welcome />>
      `
    }
  }))
// storiesOf('App', module)
//   // .addDecorator(VueInfoAddon)
//   .add('welcome', withInfo(sampleMd)(() => {
//     return {
//       components: { Welcome },
//       template: `
//           <Welcome />>
//       `
//     }
//   }))
