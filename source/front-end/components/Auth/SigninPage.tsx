import React, { createRef, useEffect, useRef } from "react";
import Rootlayout from "../../layouts/RootlayoutNoAuth";
import AuthForm from "./AuthForm";
import { GoMail, GoLock } from "react-icons/go";
import auth from "../../../../styles/auth/Form.module.css";
import { Button, message } from "antd";
import { handleLoginCreds } from "../../../Backend/Assertions/HandlePost";
import { NoticeType } from "antd/es/message/interface";
import axios from "axios";
import { useRouter } from "next/router";
interface Props{
  enviroment?:string;
  url?:string
}
function SigninPage({enviroment,url}:Props) {
  const emailref = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [messageApi, contextHolder] = message.useMessage();
const router = useRouter()
   const messageHandle = (msg: string, type: NoticeType,time:number) => {
    messageApi.open({
      key:'1',
      type: type,
      content: msg,
      duration:time
    });
  };

  const formhelper = async() => {
    let emailData = emailref.current?.value;
    let passData = passRef.current?.value;
    let a = await handleLoginCreds(emailData, passData);
    if(a){
    messageHandle(a!.msg, a!.type,a!.time);
    return
    }

    let data = {
      email: emailData,
      password: passData,
    };
    messageHandle('Logging in ...','loading',1000)
    const resp = await axios.post(enviroment == 'development'?'/api/login':`${url}/api/login`, data);
    if (resp.data.success) {
      messageApi.destroy('1')
      messageHandle(`Correct Logging in as ${resp.data.email}` ,'success',5)
      router.push('/')

    } else {
     messageApi.destroy('1')
     messageHandle('Incorrect Email / Password','error',5)
    }
  };

  return (
    <Rootlayout>
      {contextHolder}
      <AuthForm>
        <section>
          <div>
            <GoMail className={auth.icons} />
            <input
              ref={emailref}
              type="email"
              required
              placeholder="E-mail Address"
            />
          </div>
          <div>
            <GoLock className={auth.icons} />
            <input
              ref={passRef}
              type="password"
              required
              placeholder="Password"
              className="pass"
            />
          </div>
          <a href="#" className="forgot">
            <i>Forgotten Password?</i>
          </a>
          <Button
            className={auth.submit}
            onClick={() => {
              formhelper();
            }}
          >
            Sign In
          </Button>
        </section>
      </AuthForm>
    </Rootlayout>
  );
}

export default SigninPage;
