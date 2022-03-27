import React, { useState, useEffect } from 'react'
import { articleApi } from '../../request/api'

import { List ,Button} from 'antd';

import './Lists.less'
export default function Lists() {
  const [data, setdata] = useState([])
  useEffect(() => {
    articleApi().then((res) => {
      setdata(res.data.arr)
    })
  }, [])
  return (
    <div className="lists">
      <List
      className="lists-content"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<Button type="primary">编辑</Button>, <Button type="primary" danger>删除</Button>]}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.subTitle}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
