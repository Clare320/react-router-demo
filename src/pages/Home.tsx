import React, { FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./Home.less";

function Home() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const titles = [
    "First",
    "Second",
    "Third",
    "Four",
    "Five",
    "About",
    "Category",
    "Profile",
  ];

  let history = useHistory();

  React.useEffect(() => {
    console.log("history-->", history);
  }, [history]);

  const handleClick = (index: number) => {
    console.log(index);
    let route;
    if (index === 6) {
      route = "/category/meitong";
    } else {
      route = "/" + titles[index].toLowerCase();
    }
    history.push(route);
  };

  const handleSelectChange = (e: FormEvent) => {
    const select = e.target as HTMLSelectElement;
    const value = select.value;
    // 处理cookie

    document.cookie = "role=" + value;
  };
  return (
    <Layout>
      <Header className='header'>
        <div className='logo'></div>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key='sub1'
              title={
                <span>
                  <UserOutlined />
                  subnav1
                </span>
              }
            >
              <Menu.Item key='1'>option1</Menu.Item>
              <Menu.Item key='2'>option2</Menu.Item>
              <Menu.Item key='3'>option3</Menu.Item>
              <Menu.Item key='4'>option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <LaptopOutlined />
                  subnav2
                </span>
              }
            >
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub3'
              title={
                <span>
                  <NotificationOutlined />
                  subnav3
                </span>
              }
            >
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{ padding: 24, margin: 0, minHeight: 280 }}
          >
            <div>
              <div>首页</div>
              {titles.map((item, index) => (
                <button key={item + index} onClick={() => handleClick(index)}>
                  {item}
                </button>
              ))}
              <div>
                <Link to='/four'>Four</Link>
                {/* <Redirect to="/five" push /> */}
              </div>
              <div>
                <p>改变角色</p>
                <select
                  name='改变角色'
                  id='role'
                  onChange={handleSelectChange}
                  defaultValue='visitor'
                >
                  <option value='admin'>admin</option>
                  <option value='user'>user</option>
                  <option value='visitor'>visitor</option>
                </select>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export { Home };
