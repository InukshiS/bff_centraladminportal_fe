import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Layout, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  ProjectOutlined,
  PieChartOutlined,
  CheckOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

function Siderview() {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setcollapsed] = React.useState(false);

  const onCollapse = () => {
    if (collapsed === true) {
      setcollapsed(false);
    } else {
      setcollapsed(true);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ backgroundColor: "#fff" }}
    >
      <div className="logo" style={{ backgroundColor: "#6532a8" }}>
        <center>
          <Avatar
            size={80}
            icon={<UserOutlined />}
            style={{ backgroundColor: "#ba9de0", marginTop: "7px" }}
          />
        </center>
      </div>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Central Portal
        </Menu.Item>

        <SubMenu key="3" icon={<CalendarOutlined />} title="BCIP Portal">
          <Menu.Item key="31">
            <Link to="/adduser">Add User</Link>
          </Menu.Item>
          <Menu.Item key="32">
            <Link to="/allusers">All Users</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="4" icon={<CalendarOutlined />} title="Emb Barcode">
          <Menu.Item key="33">
            <Link to="/addemb">User Add</Link>
          </Menu.Item>
          <Menu.Item key="34">
            <Link to="/reademb">User Manage</Link>
          </Menu.Item>
          </SubMenu>

          <SubMenu key="6" icon={<ProjectOutlined />} title="PP Plan">
          <Menu.Item key="37">
            <Link to="/addpre">User Add </Link>
          </Menu.Item>
          <Menu.Item key="38">
            <Link to="/readpre">User Manage</Link>
          </Menu.Item>
        </SubMenu>

        <hr></hr>

        <SubMenu key="5" icon={<TeamOutlined />} title="5 M risk">
          <Menu.Item key="35">
            <Link to="/addfive">User Add</Link>
          </Menu.Item>
          <Menu.Item key="36">
            {" "}
            <Link to="/readfive">User Manage</Link>
          </Menu.Item>
        </SubMenu>
        

        {/* <SubMenu key="6" icon={<CheckOutlined />} title="BCIP Portal">
          <Menu.Item key="61">
            <Link to="/dailytasks">Add User</Link>
            </Menu.Item>
            <Menu.Item key="62">
            <Link to="/dailytasks">All Users</Link>
          </Menu.Item>
        </SubMenu>  */}

        <Menu.Item key="7" icon={<UserOutlined />}>
          <Link to="/login">Sign Out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siderview;
