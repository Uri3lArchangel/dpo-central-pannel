import React from 'react'
import TabLayout from '../core/utils/TabsLayout'
import MintChildren from './MintChildren'
import tkHm from '../../../../styles/Token/Home.module.css'
// import BurnChildren from './BurnChildren'
import TransferChlidren from './TransferChlidren'

function TokenDashboard() {
  return (
    <article>
        <main className={tkHm.mainContainer}>
            <section>
                <TabLayout MintChildren={<MintChildren />}  TransferChildren={<TransferChlidren />}/>
            </section>
        </main>
    </article>
  )
}

export default TokenDashboard