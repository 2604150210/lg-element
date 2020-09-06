import JalLink from '../src/link.vue'

export default {
  title: 'JalLink',
  component: JalLink
}

export const Link = _ => ({
  components: { JalLink },
  template: `
    <div>
      <jal-link href="https://www.baidu.com">百度</jal-link>
    </div>
  `
})

export const DisabledLink = _ => ({
  components: { JalLink },
  template: `
    <div>
      <jal-link disabled href="https://www.baidu.com">百度</jal-link>
    </div>
  `
})

export const NoUnderLineLink = _ => ({
  components: { JalLink },
  template: `
    <div>
      <jal-link no-underLine href="https://www.baidu.com">百度</jal-link>
    </div>
  `
})