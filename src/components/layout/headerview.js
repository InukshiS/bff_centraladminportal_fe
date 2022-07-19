import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Typography} from 'antd';


function Index() 
{
    const { Header} = Layout;
    
    return( <Header className="site-layout-background" style={{ padding: 10 }}><Typography.Title level={4} style={{color:"#6532a8"}}>Central Portal</Typography.Title></Header>);
}

export default Index;