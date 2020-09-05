import JalInput from '../'

export default {
  title: 'JalInput',
  component: JalInput
}

export const Text = () => ({
  components: { JalInput },
  template: '<jiailing-input v-model="value"></jiailing-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { JalInput },
  template: '<jiailing-input type="password" v-model="value"></jiailing-input>',
  data () {
    return {
      value: '123456'
    }
  } 
})