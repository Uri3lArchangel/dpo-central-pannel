import Image from "next/image";
import React, { useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import mbHome from "../../../../styles/Members/Home.module.css";
import { members } from "../core/data/membersData";
import { Button, FloatButton } from "antd";
import Form from "./Form";
import Drop from "../core/utils/Dropdown";
import Message from "../core/utils/message";

const m = members;
function Memberspage() {
  const [formDisplayed,setFormDisplay]=useState(false)
  const toggleForm=(event:React.MouseEvent)=>{
   event.stopPropagation()
    setFormDisplay(!formDisplayed)
  }
  const closeFormToggle=()=>{
    setFormDisplay(false)
  }
  return (
    <>
    {formDisplayed?  
    <Form>
        <h1>Add a member</h1>
        <label htmlFor="email">email</label>
        <input required type="email"  id="email"/>
        <label htmlFor="role"></label>
        <Drop label='Role'/>
        <Message />
      </Form>:<></>}
    <article className={mbHome.mainContentContainer}  onClick={closeFormToggle}>
      <aside>
        <HiUserGroup className={mbHome.icons} size={32} />
         <h1>Members</h1>
      </aside>
      <Button  onClick={toggleForm} >
        Add Member
      </Button>
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
