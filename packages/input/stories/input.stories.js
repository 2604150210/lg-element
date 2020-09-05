import JalInput from '../'

export default {
  title: 'JalInput',
  component: JalInput
}

export const Text = () => ({
  components: { JalInput },
  template: '<jal-input v-model="value"></jal-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { JalInput },
  template: '<jal-input type="password" v-model="value"></jal-input>',
  data () {
    return {
      value: '123456'
    }
  } 
})