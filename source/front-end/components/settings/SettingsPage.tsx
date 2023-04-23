import React, { createContext } from 'react'
import TabLayout from './SettingsTabs'
import ProfileChildren from './ProfileChildren'
import SecurityChildren from './SecurityChildren'
import { CookieMemberProps } from '../../../../pages/settings'


function SettingsPage({MemberObject,cookie,url,enviroment}:CookieMemberProps) {
  return (
    <article>
        <main>
            <TabLayout ProfileChildren={<ProfileChildren url={url} enviroment={enviroment} cookie={cookie} MemberObject={MemberObject} />} SecurityChildren={<SecurityChildren url={url} enviroment={enviroment} />} />
        </main>
    </article>
  )
}

export default SettingsPage