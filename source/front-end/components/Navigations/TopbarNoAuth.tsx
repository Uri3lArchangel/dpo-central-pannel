import Image from "next/image";
import React from "react";
import top from "/styles/Home/Topbar.module.css";
import headerLogo from "../../../../public/assets/directprivateoffers-logo-bd.png";
import MenuIcon from "../Menuicon";
import Link from "next/link";
import { AiFillSetting, AiOutlineVerified } from "react-icons/ai";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";

function TopbarNoAuth() {
  return (
    <div >
      <div className={top.topBar}>
        <h1>DIRECT PRIVATE OFFERS &quot;Global Expert Market&quot; </h1>
        <div className={top.headerLogo}>
          <Image alt="Direct Private Offers Header" src={headerLogo} />
        </div>
       
      </div>
      <MenuIcon />
    </div>
  );
}

export default TopbarNoAuth;
