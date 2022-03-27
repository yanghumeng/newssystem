import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {loginApi} from '../../request/api'

import "./Login.less"
import logoimg from '../../assets/logo.png'

export default function Login() {
   const navigate=useNavigate();
  const onFinish = (values) => {
    loginApi({
      username:values.username,
      password:values.password
    }).then(res=>{
      if(res.errCode===0){
        message.success(res.message);
        localStorage.setItem('userInfo',JSON.stringify(res.data))
        setTimeout(() => {
          navigate('/')
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
          <Form.Item>
            <a className="login-form-forgot" href="/register">
              没有账号？马上创建
        </a>

            {/* <a className="login-form-forgot" href="">
            Forgot password
        </a> */}
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
