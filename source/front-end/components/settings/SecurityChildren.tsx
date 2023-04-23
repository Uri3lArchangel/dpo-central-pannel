import React, { useEffect, useRef, useState } from "react";
import TabsChildrenLayout from "../../layouts/TabsChildrenLayout";
import PasswordInput from "../core/utils/Passwordinput";
import { Button, InputRef, message } from "antd";
import { BiLock } from "react-icons/bi";
import TabsChildrenLayout2 from "../../layouts/TabsChildrenLayout2";
import Form from "../Members/Form";
import Message from "../core/utils/message";
import { NoticeType } from "antd/es/message/interface";
import { returnStructType } from "../../../Backend/Assertions/HandleProfileChange";
import { passwordCheck } from "../../../Backend/Assertions/passCheck";
import axios from "axios";
import { useRouter } from "next/router";
import { CookieProps } from "../../../../pages";

function SecurityChildren({url,enviroment}:CookieProps) {
  const [passwordPromptDisplay, setPromptDisplay] = useState(false);
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const passRefSec = useRef<HTMLInputElement>(null);
  const messageHandle = (msg: string, type: NoticeType, time: number) => {
    messageApi.open({
      key: "4",
      type: type,
      content: msg,
      duration: time,
    });
  };
  const triggerPromptOpen = (e: React.MouseEvent) => {
    e.stopPropagation();

    setPromptDisplay(true);
  };
  const triggerPromptClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPromptDisplay(false);
  };

  useEffect(() => {
    let password = (document.getElementById("passwd") as HTMLInputElement).value;
    let confirmPassword = (document.getElementById("confirm") as HTMLInputElement).value;
    if (!password || password != confirmPassword) {
      let save_btn = document.getElementById(
        "saveChangesButtonSec"
      ) as HTMLButtonElement;
      let cancel_btn = document.getElementById(
        "cancelChangesButtonSec"
      ) as HTMLButtonElement;

      save_btn.disabled = true;
      cancel_btn.disabled = true;
    }
  });

  const updateChangeSec = () => {
    let save_btn = document.getElementById(
      "saveChangesButtonSec"
    ) as HTMLButtonElement;
    let cancel_btn = document.getElementById(
      "cancelChangesButtonSec"
    ) as HTMLButtonElement;

    let password = (document.getElementById("passwd") as HTMLInputElement).value;
    let confirmPassword = (
      document.getElementById("confirm") as HTMLInputElement
    ).value;

    if (password != "" && confirmPassword === password) {
      save_btn.disabled = false;
      cancel_btn.disabled = false;
    } else {
      save_btn.disabled = true;
      cancel_btn.disabled = true;
    }
  };
  const cancelChangesSec = () => {
    (document.getElementById("passwd") as HTMLInputElement).value = "";
    (document.getElementById("confirm") as HTMLInputElement).value = "";

    let save_btn = document.getElementById(
      "saveChangesButtonSec"
    ) as HTMLButtonElement;
    let cancel_btn = document.getElementById(
      "cancelChangesButtonSec"
    ) as HTMLButtonElement;
    save_btn.disabled = true;
    cancel_btn.disabled = true;
  };
  const submitChangesSec = async (e: React.MouseEvent) => {
    messageHandle("Saving...", "loading", 10000);

    let passwordData = (document.getElementById("passwd") as HTMLInputElement).value;
    let confirmPasswordData = (document.getElementById("confirm") as HTMLInputElement).value;
    if(passwordData != confirmPasswordData){
      messageApi.destroy("4");

      messageHandle('Please ensure password is the same in the two fields','error',5)
      setTimeout(() => {
        messageApi.destroy("4");
      }, 5000);
      return;
    }
    const password = passRefSec.current?.value;
    if (password) {
      let data = {
        password,
      };
      let r: returnStructType = await passwordCheck(data,url!,enviroment!);
      if (r) {
        messageApi.destroy("4");

        messageHandle(r.msg, r.type, r.time);
        setTimeout(() => {
          messageApi.destroy("3");
        }, 5000);
        return;
      }
    } else {
      messageApi.destroy("4");

      messageHandle("Please Input Your Pasword", "error", 5);
      return;
    }
    const data = {
      passwordData,confirmPasswordData
    }
    let res = await axios.post(enviroment === 'development'?"/api/settings/security":`${url}/api/settings/security`, data);
    triggerPromptClose(e);
    let r: { msg: string; type: NoticeType; time: number } = res.data.message;
    messageApi.destroy("3");
    messageHandle(r.msg, r.type, r.time);
    cancelChangesSec();
    if (r.type == "success") {
      router.reload();
    }
  };
  return (
    <>
    {contextHolder}
      {passwordPromptDisplay ? (
        <Form>
          <label htmlFor="pass">Enter Password to confirm action </label>
          <input type="password" ref={passRefSec} required name="" id="pass" />
          <Button onClick={submitChangesSec}>Save Changes</Button>
          <Button onClick={triggerPromptClose} danger>
            Cancel
          </Button>
        </Form>
      ) : (
        <></>
      )}
      <TabsChildrenLayout2 close={triggerPromptClose}>
        <h2>Change Password</h2>
        <div className="block justify-between my-6 flexable sm:flex">
          <PasswordInput
            change={updateChangeSec}
            id="passwd"
            placeholder="New Password"
            classname="w-full my-2 sm:w-5/12"
          />
          <PasswordInput
            change={updateChangeSec}
            id="confirm"
            placeholder="Confirm Password"
            classname="w-full my-2 sm:w-5/12"
          />
        </div>
        {/* <Button danger type='link'>Forgot Password?</Button> */}
        <div className="my-6 flex justify-between items-center ">
          {/* <h3 className='text-left'>Setup 2FA <BiLock /></h3> */}

          {/* <Button className='bg-blue-300 text-white'>Setup</Button> */}
        </div>
        <div className="flex justify-end space-x-3">
          <Button onClick={triggerPromptOpen} id="saveChangesButtonSec">
            Save
          </Button>
          <Button danger id="cancelChangesButtonSec" onClick={cancelChangesSec}>
            Cancel
          </Button>
        </div>
      </TabsChildrenLayout2>
    </>
  );
}

export default SecurityChildren;
