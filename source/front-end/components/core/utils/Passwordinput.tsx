import React, { ChangeEventHandler } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, InputRef, Space } from "antd";

interface Props {
  placeholder?: string;
  classname?:string;
  ref?:React.LegacyRef<InputRef>;
  change?:ChangeEventHandler,
  id?:string
}

const PasswordInput = ({ placeholder,classname,ref,change,id }: Props) => {
  return (
    
      <Input.Password onChange={change} id={id} placeholder={placeholder} className={classname}  />
  );
};

export default PasswordInput;
