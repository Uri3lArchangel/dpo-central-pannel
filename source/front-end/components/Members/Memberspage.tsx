import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import mbHome from "../../../../styles/Members/Home.module.css";
import { members } from "../core/data/membersData";
import { Button, FloatButton, Input, message } from "antd";
import Form from "./Form";
import Drop, { role } from "../core/utils/Dropdown";
import { handleLoginCreds } from "../../../Backend/Assertions/HandlePost";
import { NoticeType } from "antd/es/message/interface";
import axios from "axios";
import { CookieProps } from "../../../../pages";
import { sliceCookie } from "../../../Backend/Utils/spliceCookie";
import { jwtDecode } from "../../../Backend/Utils/Jwt";

const m = members;
function Memberspage({cookie,url,enviroment}:CookieProps) {
  let Role
  if(cookie){
  Role =jwtDecode(sliceCookie(cookie)!).role
  }
  const [messageApi, contextHolder] = message.useMessage();
  const [formDisplayed, setFormDisplay] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const toggleForm = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFormDisplay(!formDisplayed);
  };
  const closeFormToggle = () => {
    setFormDisplay(false);
  };

  const messageHandle = (msg: string, type: NoticeType, time: number) => {
    messageApi.open({
      key: "2",
      type: type,
      content: msg,
      duration: time,
    });
  };

  const addMember = async () => {
    try {
      let email = emailRef.current?.value;
      let pass = passRef.current?.value;
      let a = await handleLoginCreds(email, pass);
      if (a) {
        messageHandle(a!.msg, a!.type, a!.time);
        return;
      }
      let data = {
        Email: email!,
        Password:pass,
        Role: role.name,
      };
      messageHandle("Adding Member ...", "loading", 1000);
      await axios.post(enviroment === 'development'?'/api/addMember':`${url}/api/addMember`, data);
      messageApi.destroy();
      messageHandle("Member Added...", "success", 4);
    } catch (err: any) {
      let key: string[] | undefined;
      let code = err.response.data.message.code;
      if (err.response.data.message.keyValue) {
        key = Object.keys(err.response.data.message.keyValue);
      }
      messageApi.destroy("2");

      let email = err.response.data.message.keyValue.Email || undefined;
      if (code === 11000 && email && key) {
        messageHandle(
          `An account with ${email} ${key} address already exists`,
          "error",
          8
        );
        setTimeout(() => {
          messageApi.destroy("2");
        }, 8000);
      } else {
        messageHandle(`Server error`, "error", 8);
        messageApi.destroy("2");
      }
    }
  };
  

  return (
    <>
      {contextHolder}
      {formDisplayed ? (
        <Form>
          <h1>Add a member</h1>
          <label htmlFor="email">email</label>
          <input required type="email" ref={emailRef} id="email" />
          <label htmlFor="password">password</label>
          <input type="password"  ref={passRef} id="password" />
          <label htmlFor="role"></label>
          <Drop label="Role" />
          <Button onClick={addMember}>Add Member</Button>
        </Form>
      ) : (
        <></>
      )}
      <article
        className={mbHome.mainContentContainer}
        onClick={closeFormToggle}
      >
        <aside>
          <HiUserGroup className={mbHome.icons} size={32} />
          <h1>Members</h1>
        </aside>
        {Role === 'President'?<Button onClick={toggleForm}>Add Member</Button>:<></>}
        <main>
          {m.map((e, index) => (
            <section className={mbHome.memberContainer}>
              <figure>
                <Image src={e.image} alt="member image" />
              </figure>
              <article>
                <h2>{e.name}</h2>
                <p>{e.role}</p>
              </article>
            </section>
          ))}
        </main>
      </article>
    </>
  );
}

export default Memberspage;
