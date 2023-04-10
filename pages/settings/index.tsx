import React, { Fragment } from 'react'
import Rootlayout from '../../source/front-end/layouts/Rootlayout'
import SettingsPage from '../../source/front-end/components/settings/SettingsPage'

function index() {
  return (
    <Fragment>
        <Rootlayout>
            <SettingsPage />
        </Rootlayout>
    </Fragment>
    )
}

export default index