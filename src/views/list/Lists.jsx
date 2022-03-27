import React, { useState, useEffect } from 'react'
import { articleApi } from '../../request/api'

import { List ,Button,Pagination} from 'antd';

import './Lists.less'
export default function Lists() {
  const [data, setdata] = useState([])
  const [page, setpage] = useState(3)
  useEffect(() => {
    articleApi().then((res) => {
      console.log(res)
      if(res.errCode===0){
        let {arr,total,num,count}=res.data
      }
      //setdata(res.data.arr)
    })
  }, []);
  const onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
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
      <Pagination onChange={onChange} total={50} />
    </div>
  )
}
