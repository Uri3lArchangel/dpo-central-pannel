import React, { CSSProperties } from "react";
import { Spin } from "antd";
import Head from "next/head";

const style: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "50%",
};

function Loading() {
  return (
    <>
     <Head>
          <title>Direct Private Offers Dashboard Panel</title>
          <link rel="icon" href="/assets/handshake.png" />
        </Head>
      <Spin style={style} />
    </>
  );
}

export default Loading;
