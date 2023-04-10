import React from 'react'
import TabLayout from './SettingsTabs'
import ProfileChildren from './ProfileChildren'
import SecurityChildren from './SecurityChildren'

function SettingsPage() {
  return (
    <article>
        <main>
            <TabLayout ProfileChildren={<ProfileChildren />} SecurityChildren={<SecurityChildren />} />
        </main>
    </article>
  )
}

export default SettingsPage