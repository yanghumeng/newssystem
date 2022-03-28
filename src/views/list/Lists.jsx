import React, { useState, useEffect } from 'react'
import { articleApi } from '../../request/api'

import { List, Button, Pagination } from 'antd';

import './Lists.less'
export default function Lists() {
  const [data, setdata] = useState([])
  const [total, settotal] = useState(0)
  const [current, setcurrent] = useState(1)
  const [pagesize, setpagesize] = useState(10)
  const getList = (num) => {
    articleApi({
      num: num,
      count: pagesize
    }).then((res) => {
      console.log(res)
      if (res.errCode === 0) {
        let { arr, total, num, count } = res.data;
        setdata(arr);
        settotal(total);
        setcurrent(num);
        setpagesize(count);
      }
    })
  }
  useEffect(() => {
    getList(current)
  }, []);
  const onChange = page => {
    console.log(page);
    getList(page)
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
      <Pagination current={current} pageSize={pagesize} onChange={onChange} total={total} />
    </div>
  )
}
