"use client";

import { TopView } from "@/components/TopView";
import { Menu } from "antd";
import { MenuProps } from "antd";
import {
  QuestionCircleOutlined,
  FileTextOutlined,
  MailOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { SetStateAction, useState } from "react";
import { contentMap } from "@/components/ContentMap";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "关于我们",
    key: "about",
    icon: <QuestionCircleOutlined />,
    //   {
    //     label: "公司理念",
    //     key: "idea",
    //   },
    //   {
    //     label: "公司简介",
    //     key: "compony-intro",
    //   },
    //   {
    //     label: "公司荣誉",
    //     key: "awards",
    //   },
    //   {
    //     label: "领导关怀",
    //     key: "compony-care",
    //   },
    //   {
    //     label: "典型客户",
    //     key: "clients",
    //   },
    //   {
    //     label: "团队成员",
    //     key: "team-members",
    //   },
    // ],
    style: { margin: "0 30px" },
  },
  {
    label: "产品介绍",
    key: "product-intro",
    icon: <FileTextOutlined />,
    // children: [
    //   {
    //     label: "倍频器件",
    //     key: "products",
    //   },
    //   {
    //     label: "其他倍频晶体器件",
    //     key: "other-products",
    //   },
    //   {
    //     label: "深紫外激关器联合",
    //     key: "deep-products",
    //   },
    //   {
    //     label: "技术开发",
    //     key: "techonology",
    //   },
    // ],
    style: { margin: "0 30px" },
  },
  {
    label: "新闻动态",
    key: "news",
    icon: <GlobalOutlined />,
    style: { margin: "0 30px" },
  },
  {
    label: "联系方式",
    key: "contact",
    icon: <MailOutlined />,
    style: { margin: "0 30px" },
  },
  {
    label: "常见问题",
    key: "problems",
    icon: <SettingOutlined />,
    style: { margin: "0 30px" },
  },
];

export default function Home() {
  const [menuCurrent, setMenuCurrent] = useState("about");

  const onClick: MenuProps["onClick"] = (e: {
    key: SetStateAction<string>;
  }) => {
    console.log("click ", e);
    setMenuCurrent(e.key);
  };
  return (
    <>
      <div className="flex flex-col">
        <main className="flex flex-col">
          <TopView />
          <Menu
            onClick={onClick}
            selectedKeys={[menuCurrent]}
            mode="horizontal"
            items={items}
            style={{ minWidth: 0, flex: "auto", paddingLeft: "20%" }}
          />
          <div className="p-6 bg-white">{contentMap[menuCurrent]}</div>
        </main>
      </div>
    </>
  );
}
