import { shallowMount } from '@vue/test-utils'
import Breadcrumb from '@/components/molecules/Breadcrumb.vue'

describe('AppHeading.vue', () => {
  it('propsで受け取った値を適切に表示する', () => {
    const props = {
      propsData: {
        items: [
          { label: 'トップ', url: '#' },
          { label: '通知番組', url: '#' }
        ]
      }
    }
    const wrapper = shallowMount(Breadcrumb, props)
    expect(wrapper.contains('.item')).toBe(true)
  })
  it('snapshotチェック', () => {
    const props = {
      propsData: {
        items: [
          { label: 'トップ', url: '#' },
          { label: '通知番組', url: '#' }
        ]
      }
    }
    const wrapper = shallowMount(Breadcrumb, props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
