import React, { useEffect, useState } from 'react'
import Editor from 'wangeditor'
import { Form, Input, PageHeader, Button, Modal, message } from 'antd';
import "./Edit.less"
import { useParams ,useNavigate,useLocation} from 'react-router-dom'

import format from '../../utils/index'
import { articleAddApi, getArticleApi, articleUpdateApi } from '../../request/api'

let editor = null
export default function Edit() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const navigate=useNavigate();
  const location=useLocation();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        let { title, subTitle } = values;
        if (params.id) {
          articleUpdateApi({ title, subTitle, content,id:params.id }).then((res) => {
            if(res.errCode===0){
              message.success(res.message);
              navigate('/list')
            }else{
              message.error(res.message);
            }
            setIsModalVisible(false);//关闭弹出框
          })
        } else {
          articleAddApi({ title, subTitle, content }).then((res) => {
            if(res.errCode===0){
              message.success(res.message);
              navigate('/list')
            }else{
              message.error(res.message);
            }
          })
        }
      })
      .catch(() => {
        return
      });
     setIsModalVisible(false);//关闭弹出框
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // 模拟componentDidMount()
  useEffect(() => {
    editor = new Editor('.edit');
    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }
    editor.create()

    // 根据id得到文章
    if (params.id) {
      getArticleApi({ id: params.id }).then((res) => {
        if (res.errCode === 0) {
          editor.txt.html(res.data.content);
          setTitle(res.data.title);
          setSubTitle(res.data.subTitle)
        }
      })
    }
    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }, [location.pathname])
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={params.id ? () => null : null}
        title="文章编辑"
        subTitle={"当前日期：" + format.formatTime(new Date, "yyyy-MM-dd")}
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            提交
          </Button>,
        ]}
      />
      <div className="edit">
      </div>
      <Modal zIndex={99999} title="文章标题" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        okText="提交"
        cancelText="取消"
      >

        <Form
          form={form}
          name="basic"
          autoComplete="off"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            title: title,
            subTitle: subTitle
          }}>
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: '请填写标题!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="副标题"
            name="subTitle"
            rules={[
              {
                required: true,
                message: '请填写副标题!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
