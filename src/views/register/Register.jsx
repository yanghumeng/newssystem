import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, Button ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {registerApi} from '../../request/api'

import "../login/Login.less"
import logoimg from '../../assets/logo.png'

export default function Register() {
  const navigate=useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    registerApi({
      username:values.username,
      password:values.password
    }).then(res=>{
      if(res.errCode===0){
        message.success(res.message);
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }else{
        message.error(res.message);
      }
    })
  };
  return (
    <div className="all">
      <div className="login">
      <img src={logoimg} alt="" />
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入你的用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="输入密码" />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次密码不一致!'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="确认密码"/>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="/login">
              已有账号？马上登录
        </a>

            {/* <a className="login-form-forgot" href="">
            Forgot password
        </a> */}
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              注册
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
