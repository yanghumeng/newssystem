import React, { useState, useEffect } from 'react'
import { Dropdown, Menu,message } from 'antd'
import {useNavigate} from 'react-router-dom'

import { CaretDownOutlined } from '@ant-design/icons';

import logoimg from '../assets/logo.png'
import userimg from '../assets/default.png'

export default function Header() {
  const navigate=useNavigate();
  const [avatar, setAvatar] = useState(userimg);
  const [name, setName] = useState('游客');
  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      let username = userInfo.username;
      let avatar = userInfo.avatar;
      if (avatar) {
        setAvatar('http://47.93.114.103:6688/' + avatar);
      }
      if (username) {
        setName(username)
      }
    }else{
      navigate('/login')
    }
  }, [])

  const onClick = ({ key }) => {
    if(key==2){
      localStorage.removeItem('userInfo');
      message.success('退出成功');
      setTimeout(() => {
        navigate('/login')
      }, 1000);
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">修改信息</Menu.Item>
      <Menu.Item key="2" >退出登录</Menu.Item>
    </Menu>
  );
  return (
    <header>
      <img src={logoimg} alt="" className="logo" />
      <div className="right">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="" className="userphoto" />
            {name}<CaretDownOutlined />
          </a>
        </Dropdown>
      </div>
    </header>
  )
}
