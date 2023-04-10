import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const PasswordInput: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Space direction="horizontal" className='custom' >
      <Input.Password placeholder="input password"  style={{display:'flex',height:'min-content'}} />
    </Space>
  );
};

export default PasswordInput;
