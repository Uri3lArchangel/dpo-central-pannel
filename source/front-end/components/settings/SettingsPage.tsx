import React, { createContext } from 'react'
import TabLayout from './SettingsTabs'
import ProfileChildren from './ProfileChildren'
import SecurityChildren from './SecurityChildren'
import { CookieMemberProps } from '../../../../pages/settings'


function SettingsPage({MemberObject,cookie}:CookieMemberProps) {
  return (
    <article>
        <main>
            <TabLayout ProfileChildren={<ProfileChildren cookie={cookie} MemberObject={MemberObject} />} SecurityChildren={<SecurityChildren />} />
        </main>
    </article>
  )
}

export default SettingsPage