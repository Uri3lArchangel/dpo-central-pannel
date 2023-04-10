import React from 'react';
import { Button, message } from 'antd';

interface Props{
  loading:String,
  success:String,
  text:String
}

const Message = ({loading,success,text}:Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: loading,
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: success,
        duration: 2,
      });
    }, 1000); 
  };

  return (
    <>
      {contextHolder}
      <Button onClick={openMessage}>
        {text}
      </Button>
    </>
  );
};

export default Message;