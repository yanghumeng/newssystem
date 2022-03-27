import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Menu } from 'antd';
import { EditOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;
export default function Sidebar() {
  const navigate=useNavigate();
  const rootSubmenuKeys = ['sub1', 'sub2'];
  const [openKeys, setOpenKeys] = React.useState([]);
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleClick = e => {
    navigate('/'+e.key)
  };
  return (
    <Menu mode="inline" theme="dark" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 180 }} onClick={handleClick}>
      <SubMenu key="sub1" title="文章管理">
        <Menu.Item key="list">文章列表</Menu.Item>
        <Menu.Item key="edit">文章编辑</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="个人信息">
        <Menu.Item key="means" icon={<EditOutlined />}>修改信息</Menu.Item>
      </SubMenu>
    </Menu>
  )
}
