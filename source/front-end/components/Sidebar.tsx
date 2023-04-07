import React from "react";
import side from "../../../styles/Home/Sidebar.module.css";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import {
  AiOutlineVerified,
  AiFillSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./Menuicon";

function Sidebar() {
  return (
    <>
    <aside id="sidenav_container" className={side.sidenav_container}>
        
      <figure className={side.profile}>
        <AiOutlineUser className={side.icons} size={40} />
        <figcaption>
          <h1>User</h1>
          <p>Name: Uriel</p>
          <p>Role: Top level Admin</p>
        </figcaption>
      </figure>
      <ul className={side.sideNav}>
        <div className={side.pageLinks}>
          <li>
            <Link href={"/"}>
              <p>Overview</p>
              <HiHome className={side.icons} size={32} />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <p>Members</p>
              <HiUserGroup className={side.icons} size={32} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <p>KYC Request</p>
              <AiOutlineVerified className={side.icons} size={32} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <p>Token Offering</p>
              <FaCoins className={side.icons} size={30} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <p>Settings</p>
              <AiFillSetting className={side.icons} size={30} />
            </Link>{" "}
          </li>
        </div>
        <div className={side.signOut_btn}>
          <button>Sign Out</button>
        </div>
      </ul>
    </aside>
    </>
  );
}

export default Sidebar;
