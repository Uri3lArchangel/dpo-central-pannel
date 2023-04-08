import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import Maincontent from '../source/front-end/components/Overview/Overviewpage'
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

