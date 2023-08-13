import { Button, Layout, Menu, Progress, Space } from "antd";
import React, { useState } from "react";
import { FiBarChart, FiChevronDown, FiSettings, FiUsers } from "react-icons/fi";
import { HiOutlineDownload, HiOutlineUser } from "react-icons/hi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/Icons/Logo.svg";
import UserImg from "../assets/Images/Avatar/user.png";
import "./Navbar.css";
import Topbar from "./Topbar";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const [toggleBar, setToggleBar] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const mainMenuItems = [
    {
      key: "dashboard",
      icon: <FiBarChart />,
      label: "Dashboard",
    },
    {
      key: "contacts",
      icon: <HiOutlineUser />,
      label: "Contacts",
    },
    {
      key: "products",
      icon: <FiBarChart />,
      label: "Products",
    },
    {
      key: "user-management",
      icon: <FiUsers />,
      label: "User Management",
    },
  ];

  const mainMenuItems2 = [
    {
      key: null,
      icon: <FiChevronDown />,
      label: "See All",
    },
  ];

  const mainMenuItems3 = [
    {
      key: "support",
      icon: <FiBarChart />,
      label: "Support",
    },
    {
      key: "settings",
      icon: <FiSettings />,
      label: "Settings",
    },
  ];

  const handleMenuItemClick = (itemKey) => {
    setActiveItem(itemKey); // Update the activeItem state
    navigate(`/${itemKey}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} className={toggleBar ? "hideSidebar" : "sidebar"}>
        <div className="demo-logo-vertical logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="side_bar_menu_list">
          <div className="sidebar_top">
            <Menu theme="dark" mode="inline" selectedKeys={[activeItem]}>
              {mainMenuItems.map((menuItem) => (
                <Menu.Item
                  key={menuItem.key}
                  icon={menuItem.icon}
                  onClick={() => handleMenuItemClick(menuItem.key)}
                >
                  {menuItem.label}
                </Menu.Item>
              ))}
            </Menu>
            <hr />
            <Menu theme="dark" mode="inline" selectedKeys={[activeItem]}>
              {mainMenuItems2.map((menuItem) => (
                <Menu.Item
                  key={menuItem.key}
                  icon={menuItem.icon}
                  onClick={() => handleMenuItemClick(menuItem.key)}
                >
                  {menuItem.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
          <div className="sidebar_center">
            <Menu theme="dark" mode="inline" selectedKeys={[activeItem]}>
              {mainMenuItems3.map((menuItem) => (
                <Menu.Item
                  key={menuItem.key}
                  icon={menuItem.icon}
                  onClick={() => handleMenuItemClick(menuItem.key)}
                >
                  {menuItem.label}
                </Menu.Item>
              ))}
            </Menu>
            <div className="complite_profile">
              <Space>
                <Progress type="circle" className="circle" percent={75} />
              </Space>
              <p>Complete Profile</p>
              <p>Let’s empower your financial task today with Findash.</p>
              <span>
                Dismiss <Link to="">Go to Profile</Link>
              </span>
            </div>
            <div className="sidebar_bottom">
              <hr />
              <div className="sidenav_user">
                <div className="user">
                  <img src={UserImg} alt="" className="user_img" />
                  <span>
                    <p className="name">Daniel Rhye</p>
                    <p className="gmail">daniel@creo.com</p>
                  </span>
                </div>
                <Link to="">
                  <HiOutlineDownload className="icons  logout_icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Sider>
      <Layout className={toggleBar ? "hideSidebar" : "body-layout"}>
        <Header
          className="fixed-header"
          style={{
            padding: 0,
            minHeight: 65,
          }}
        >
          <Button
            type="text"
            className="header_toggle_btn"
            icon={
              toggleBar ? (
                <FiBarChart className="icons" />
              ) : (
                <FiBarChart className="icons" />
              )
            }
            onClick={() => setToggleBar(!toggleBar)}
          />
          <Topbar />
        </Header>
        <Content
          className="body_content"
          style={{
            margin: "24px 24px",
            padding: 24,
            minHeight: 100,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
