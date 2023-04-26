import React, { ReactNode } from 'react';
import { Tabs } from 'antd';

interface Props{
  MintChildren?:React.ReactNode
  BurnChildren?:React.ReactNode
  TransferChildren?:React.ReactNode
}

const TabLayout = ({MintChildren,TransferChildren}:Props) => (
  <Tabs 
  style={{marginTop:'10em'}}
    defaultActiveKey="1"
    centered
    items={[
      {
        label:'Mint',
        children:MintChildren,
        key:'1'
      }, 
      {
        label:'Transfer',
        children:TransferChildren,
        key:'2'
      },
    ]}
  />
);

export default TabLayout;