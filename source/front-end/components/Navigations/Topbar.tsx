import Image from "next/image";
import React from "react";
import top from "/styles/Home/Topbar.module.css";
import headerLogo from "../../../../public/assets/directprivateoffers-logo-bd.png";
import MenuIcon from "../Menuicon";
import Link from "next/link";
import { AiFillSetting, AiOutlineVerified } from "react-icons/ai";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";

function Topbar() {
  return (
    <div >
      <nav className={top.topBar}>
        <h1>DIRECT PRIVATE OFFERS &quot;Global Expert Market&quot; </h1>
        <div className={top.headerLogo}>
          <Image alt="Direct Private Offers Header" src={headerLogo} />
        </div>
        <ul className={top.topNav}>
        <div className={top.pageLinks}>
          <li>
            <Link href={"/"}>
              <p>Overview</p>
              <HiHome className={top.icons} size={25} />
            </Link>
          </li>
          <li>
            <Link href={"/members"}>
              <p>Members</p>
              <HiUserGroup className={top.icons} size={25} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <p>KYC Request</p>
              <AiOutlineVerified className={top.icons} size={25} />
            </Link>
          </li>
          <li>
            <Link href={"/token-dashboard"}>
              <p>Token Dashboard</p>
              <FaCoins className={top.icons} size={25} />
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <p>Settings</p>
              <AiFillSetting className={top.icons} size={25} />
            </Link>{" "}
          </li>
        </div>
        <div className={top.signOut_btn}>
          {true?<button id="signin">Sign In / Sign Up</button>:<button id="signout">Sign Out</button>}
        </div>
      </ul>
      </nav>
      <MenuIcon />
    </div>
  );
}

export default Topbar;
