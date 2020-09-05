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
    <jal-form class="form" ref="form" :model="user" :rules="rules">
      <jal-form-item label="用户名" prop="username">
        <!-- <jal-input v-model="user.username"></jal-input> -->
        <jal-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></jal-input>
      </jal-form-item>
      <jal-form-item label="密码" prop="password">
        <jal-input type="password" v-model="user.password"></jal-input>
      </jal-form-item>
      <jal-form-item>
        <jal-button type="primary" @click="login">登 录</jal-button>
      </jal-form-item>
    </jal-form>
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