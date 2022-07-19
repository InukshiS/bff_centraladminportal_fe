import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout} from 'antd';


function FooterView() 
{
    const { Footer } = Layout;

    return(<Footer style={{ textAlign: 'center' }}>Ver 21.12.10 ©<>{new Date().getFullYear()}</> Solution by BFF EAG Team</Footer>);
}

export default FooterView;