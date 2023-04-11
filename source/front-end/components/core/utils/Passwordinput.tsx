import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

interface Props {
  placeholder?: string;
  classname?:string
}

const PasswordInput = ({ placeholder,classname }: Props) => {
  return (
    
      <Input.Password placeholder={placeholder} className={classname} />
  );
};

export default PasswordInput;
