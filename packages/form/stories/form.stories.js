import JalForm from '../'
import JalFormItem from '../../formitem'
import JalInput from '../../input'
import JalButton from '../../button'

export default {
  title: 'JalForm',
  component: JalForm
}

export const Login = () => ({
  components: { JalForm, JalFormItem, JalInput, JalButton },
  template: `
    <jiailing-form class="form" ref="form" :model="user" :rules="rules">
      <jiailing-form-item label="用户名" prop="username">
        <!-- <jiailing-input v-model="user.username"></jiailing-input> -->
        <jiailing-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></jiailing-input>
      </jiailing-form-item>
      <jiailing-form-item label="密码" prop="password">
        <jiailing-input type="password" v-model="user.password"></jiailing-input>
      </jiailing-form-item>
      <jiailing-form-item>
        <jiailing-button type="primary" @click="login">登 录</jiailing-button>
      </jiailing-form-item>
    </jiailing-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})