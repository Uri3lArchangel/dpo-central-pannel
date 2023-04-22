import React, { ChangeEventHandler } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, InputRef, Space } from "antd";

interface Props {
  placeholder?: string;
  classname?:string;
  ref?:React.RefObject<InputRef>;
  change?:ChangeEventHandler
}

const PasswordInput = ({ placeholder,classname,ref,change }: Props) => {
  return (
    
      <Input.Password onChange={change} placeholder={placeholder} className={classname} ref={ref} />
  );
};

export default PasswordInput;
