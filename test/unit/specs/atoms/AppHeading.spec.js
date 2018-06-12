import { shallowMount } from '@vue/test-utils'
import AppHeading from '@/components/atoms/AppHeading/Default.vue'

describe('AppHeading.vue', () => {
  it('見た目レベルが指定されていない時、見出しレベルに合わせる', () => {
    const wrapper = shallowMount(AppHeading)
    expect(wrapper.contains('h1')).toBe(true)
  })
  it('見た目レベルが指定されているときは見出しレベルを合わせない', () => {
    const props = {
      propsData: {
        level: 1,
        visualLevel: 2
      }
    }
    const wrapper = shallowMount(AppHeading, props)
    expect(wrapper.props().visualLevel).toBe(2)
  })
  it('1未満のレベルは1とする', () => {
    const props = {
      propsData: {
        level: 0,
        visualLevel: 0
      }
    }
    const wrapper = shallowMount(AppHeading, props)
    expect(wrapper.vm.tag).toBe('h1')
    expect(wrapper.vm.formattedViewLevel).toBe(1)
  })
  it('7以上の見出しレベルは6とする', () => {
    const props = {
      propsData: {
        level: 7,
        visualLevel: 7
      }
    }
    const wrapper = shallowMount(AppHeading, props)
    expect(wrapper.vm.tag).toBe('h6')
    expect(wrapper.vm.formattedViewLevel).toBe(6)
  })
})
