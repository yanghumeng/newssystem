import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'
const breadcrumbNameMap = {
  '/list': '文章列表',
  '/edit': '编辑文章',
  '/means': '修改资料'
};
export default function Bread() {
  const [breadName, setBreadName] = useState('')
  const { pathname } = useLocation();

  useEffect(() => {
    if (breadcrumbNameMap[pathname]) {
      setBreadName(breadcrumbNameMap[pathname])
    }else{
      if(pathname.includes('edit')){
        setBreadName(breadcrumbNameMap['/edit'])
      }
    }
  }, [pathname])
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>{breadName}</Breadcrumb.Item>
    </Breadcrumb>
  )
}
