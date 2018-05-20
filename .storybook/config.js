import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories() {
  require('./../src/stories')
  const req = require.context('../src/stories', true, /.js$/)
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
