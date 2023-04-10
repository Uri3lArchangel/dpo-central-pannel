import Head from "next/head";
import React, { ReactNode, Suspense } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Navigations/Sidebar";
import Topbar from "../components/Navigations/Topbar";

interface Props {
  children: ReactNode;
}

function Rootlayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Direct Private Offers Dashboard Panel</title>
        <link rel="icon" href="/assets/handshake.png" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Topbar />
        <Sidebar />
      </header>
         <main style={{backgroundColor:'#efefef',paddingTop:'2em'}}>{children}</main>

      <Footer />
    </>
  );
}

export default Rootlayout;
