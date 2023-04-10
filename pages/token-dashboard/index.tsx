import React, { Fragment } from "react";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import TokenDashboard from "../../source/front-end/components/Token/TokenDashboard";

function index() {
  return (
    <Fragment>
      <Rootlayout>
        <TokenDashboard />
      </Rootlayout>
    </Fragment>
  );
}

export default index;
