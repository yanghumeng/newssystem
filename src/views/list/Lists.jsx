import React, { useState, useEffect } from 'react'
import { articleApi, delArticleApi} from '../../request/api'
import filter from '../../utils/index'

import { List, Button, Pagination } from 'antd';

import './Lists.less'
import { useNavigate } from 'react-router-dom';
export default function Lists() {
  const [data, setdata] = useState([])
  const [total, settotal] = useState(0)
  const [current, setcurrent] = useState(1)
  const [pagesize, setpagesize] = useState(10)
  const navigate= useNavigate()
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
  const delaritcle=(id)=>{
    delArticleApi({id}).then((res)=>{
      console.log(res);
    })
  }
  const onChange = page => {
    getList(page)
  };
  return (
    <div className="lists">
      <List
        className="lists-content"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<Button type="primary" onClick={()=>navigate('/edit/'+item.id)}>编辑</Button>, <Button type="primary" onClick={delaritcle} danger>删除</Button>]}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.subTitle}
            />
            <div>{filter.formatTime(item.date)}</div>
          </List.Item>
        )}
      />
      <Pagination style={{textAlign: 'center'}} current={current} pageSize={pagesize} onChange={onChange} total={total} />
    </div>
  )
}
