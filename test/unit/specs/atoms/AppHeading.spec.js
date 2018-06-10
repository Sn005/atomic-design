import Vue from 'vue'
import AppHeading from '@/components/atoms/AppHeading/Default.vue'

describe('AppHeading.vue', () => {
  it('見た目レベルが指定されていない時、見出しレベルに合わせる', () => {
    const Constructor = Vue.extend(AppHeading)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
