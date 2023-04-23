import Image from "next/image";
import React, { useContext, useState } from "react";
import top from "/styles/Home/Topbar.module.css";
import headerLogo from "../../../../public/assets/directprivateoffers-logo-bd.png";
import MenuIcon from "../Menuicon";
import Link from "next/link";
import { AiFillSetting, AiOutlineVerified } from "react-icons/ai";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";
import { CookieContext } from "../../layouts/Rootlayout";
import axios from "axios";
import { useRouter } from "next/router";
import { sliceCookie } from "../../../Backend/Utils/spliceCookie";
import { jwtDecode } from "../../../Backend/Utils/Jwt";


function Topbar() {
  const Cookie = useContext(CookieContext)
  console.log(Cookie)
  const router = useRouter()
  const logout = async()=>{
   let r =  await axios.post('https://dpo-central-pannel.vercel.app/api/logout',{})
   if(r.data.message === 'success'){
    router.reload()
   }
  }
  // let cookieData = sliceCookie(Cookie)

 
 
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
            <Link href={"/kyc-request"}>
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
          {Cookie?<button id="signout" onClick={logout}>Sign Out</button>:<button id="signin" onClick={()=>{
            router.push('/auth')
          }}>Sign In</button>}
        </div>
      </ul>
      </nav>
      <MenuIcon />
    </div>
  );
}

export default Topbar;
