import Link from 'next/link'
import React, { Fragment } from 'react'
import Maincontent from '../source/front-end/components/Maincontent'
import Sidebar from '../source/front-end/components/Sidebar'
import Topbar from '../source/front-end/components/Topbar'
import Rootlayout from '../source/front-end/layouts/Rootlayout'


function index() {
  return (
    <Fragment>
      <Rootlayout>
      <Maincontent />
      </Rootlayout>
    </Fragment>
  )
}

export default index