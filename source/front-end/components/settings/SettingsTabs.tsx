import React, { ReactNode } from 'react';
import { Tabs } from 'antd';

interface Props{
  ProfileChildren?:React.ReactNode
  SecurityChildren?:React.ReactNode
}

const TabLayout = ({ProfileChildren,SecurityChildren}:Props) => (
  <Tabs 
  style={{marginTop:'10em'}}
    defaultActiveKey="1"
    centered
    
    items={[
      {
        label:'Profile',
        children:ProfileChildren,
        key:'1'
      }, {
        label:'Security',
        children:SecurityChildren,
        key:'2'
      },
    
    ]}
  />
);

export default TabLayout;

