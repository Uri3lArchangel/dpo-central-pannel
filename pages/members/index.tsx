import React, { Fragment } from 'react'
import Memberspage from '../../source/front-end/components/Members/Memberspage'
import Rootlayout from '../../source/front-end/layouts/Rootlayout'

function index() {
  return (
    <Fragment>
        <Rootlayout>
            <Memberspage />
        </Rootlayout>
    </Fragment>
  )
}

export default index
