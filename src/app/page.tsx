"use client";

import { Menu, Layout } from "antd";
import { MenuProps } from "antd";
import {
  QuestionCircleOutlined,
  FileTextOutlined,
  MailOutlined,
  GlobalOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { SetStateAction, useState } from "react";
import { contentMap } from "@/components/ContentMap";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "首页",
    key: "main",
    icon: <BulbOutlined />,
  },
  {
    label: "关于我们",
    key: "about",
    icon: <QuestionCircleOutlined />,
  },
  {
    label: "产品介绍",
    key: "product-intro",
    icon: <FileTextOutlined />,
  },
  {
    label: "加入我们",
    key: "join",
    icon: <GlobalOutlined />,
  },
  {
    label: "联系我们",
    key: "contact",
    icon: <MailOutlined />,
  },
];

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  background: "#fff",
  borderRadius: 8,
  paddingTop: 24,
};

export default function Home() {
  const [menuCurrent, setMenuCurrent] = useState("main");

  const onClick: MenuProps["onClick"] = (e: {
    key: SetStateAction<string>;
  }) => {
    setMenuCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* <TopView /> */}

      <Layout style={{ padding: "24px" }}>
        <Sider width={250} style={siderStyle}>
          <Menu
            onClick={onClick}
            selectedKeys={[menuCurrent]}
            mode="inline"
            items={items}
            style={{
              fontSize: 16,
              fontWeight: 400,
              borderRight: "none",
            }}
          />
        </Sider>

        <Layout style={{ marginLeft: 24, background: "transparent" }}>
          <Content
            style={{
              background: "#fff",
              flex: 1,
              minHeight: 400,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              padding: 32,
            }}
          >
            {contentMap[menuCurrent]}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
