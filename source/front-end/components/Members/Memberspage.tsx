import Image from "next/image";
import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import mbHome from "../../../../styles/Members/Home.module.css";
import { members } from "../core/data/membersData";

const m = members;
function Memberspage() {
  return (
    <article className={mbHome.mainContentContainer}>
      <aside>
        <HiUserGroup className={mbHome.icons} size={32} />
         <h1>Members</h1>
      </aside>
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
  );
}

export default Memberspage;
