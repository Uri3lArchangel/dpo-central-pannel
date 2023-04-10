import React from 'react';
import { Button, message } from 'antd';

const Message: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Adding...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Added Successfully!',
        duration: 2,
      });
    }, 1000); 
  };

  return (
    <>
      {contextHolder}
      <Button onClick={openMessage}>
        Add Member
      </Button>
    </>
  );
};

export default Message;