import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('jiailing-input', () => {
  test('input-text', () => {
    const wrapper = mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })
    // wrapper.html()可以获取生成组件的DOM元素
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    // wrapper.props()可以获取生成组件的对象
    expect(wrapper.props('value')).toBe('admin') // 判断生成对象的value属性是不是admin
  })

  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})