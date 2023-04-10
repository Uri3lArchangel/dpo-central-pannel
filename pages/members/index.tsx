import React, { Fragment } from 'react'
import Memberspage from '../../source/front-end/components/Members/Memberspage'
import Rootlayout from '../../source/front-end/layouts/Rootlayout'
import { Form } from 'antd'
import Drop from '../../source/front-end/components/core/utils/Dropdown'

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
