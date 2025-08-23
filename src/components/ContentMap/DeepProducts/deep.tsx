import React from "react";
import Image from "next/image";
import { Divider } from "@/components/Divider";
import Table, { ColumnsType } from "antd/es/table";

type TitleProps = {
  number: string;
};

interface DataType {
  key: string;
  指标: string;
  我们的技术: string;
  长春新产业: string;
  Coherent: string;
  Nireco: string;
  Oxide: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "企业",
    dataIndex: "指标",
    key: "指标",
    align: "center",
    width: 140,
    render: (text) => <b style={{ fontSize: 16 }}>{text}</b>,
  },
  {
    title: "我们的技术",
    dataIndex: "我们的技术",
    key: "我们的技术",
    align: "center",
    render: (text) => (
      <span
        style={{
          color: "#ff6a00",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: "长春新产业",
    dataIndex: "长春新产业",
    key: "长春新产业",
    align: "center",
  },
  {
    title: "Coherent（美国）",
    dataIndex: "Coherent",
    key: "Coherent",
    align: "center",
  },
  {
    title: "Nireco（日本）",
    dataIndex: "Nireco",
    key: "Nireco",
    align: "center",
  },
  {
    title: "Oxide（日本）",
    dataIndex: "Oxide",
    key: "Oxide",
    align: "center",
  },
];

const data: DataType[] = [
  {
    key: "1",
    指标: "波长 (nm)",
    我们的技术: "261",
    长春新产业: "266",
    Coherent: "266",
    Nireco: "266",
    Oxide: "266",
  },
  {
    key: "2",
    指标: "功率 (W)",
    我们的技术: "1.2w",
    长春新产业: "300mw",
    Coherent: "1W",
    Nireco: "1W",
    Oxide: "1W",
  },
  {
    key: "3",
    指标: "灵敏度 (nm)",
    我们的技术: "28",
    长春新产业: "28",
    Coherent: "28",
    Nireco: "28",
    Oxide: "28",
  },
  {
    key: "4",
    指标: "使用寿命 (h)",
    我们的技术: "3000",
    长春新产业: "500",
    Coherent: "3000",
    Nireco: "3000",
    Oxide: "3000",
  },
  {
    key: "5",
    指标: "功率稳定性 (%)",
    我们的技术: "0.41",
    长春新产业: "<1",
    Coherent: "<1",
    Nireco: "<1",
    Oxide: "<1",
  },
  {
    key: "6",
    指标: "售价 (万元/台)",
    我们的技术: "30",
    长春新产业: "40",
    Coherent: "150",
    Nireco: "150",
    Oxide: "150",
  },
];

const Title: React.FC<TitleProps> = ({ number }) => {
  return (
    <div
      style={{
        background: "#1890ff",
        color: "#fff",
        borderRadius: "6px",
        padding: "6px 12px",
        fontWeight: "bold",
        fontSize: "20px",
        marginRight: "12px",
      }}
    >
      {number}
    </div>
  );
};

export const DeepProducts: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          产品介绍
        </h1>
        <Divider />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          src="/assets/产品介绍/bg2.png"
          width={450}
          height={320}
          alt=""
          style={{ borderRadius: "10px" }}
        />
        <h1
          style={{
            marginLeft: "20px",
            color: "grey",
            fontSize: "17px",
            fontWeight: "500",
            lineHeight: "2",
          }}
        >
          本公司高功率连续波固态深紫外激光器具备能量高、光束稳、体积小、寿命长、电光效率高的巨大优势，同时还能超长时间持续工作，让芯片
          14-28 nm
          节点的缺陷检测和工艺监控从“勉强能用”变成“高效可靠”，且成本大幅降低，为进口设备的五分之一。﻿
        </h1>
      </div>
      <div style={{ marginBottom: "20px", marginTop: "40px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          横向对比
        </h1>
        <Divider />
      </div>
      <div
        style={{
          //   background: "#fff",
          padding: "20px 30px",
          //   background: "blue",
          borderRadius: "10px",
          maxWidth: "85%",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "row",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginRight: "50px",
            background: "#f5f5f5",
            borderRadius: "10px",
            marginLeft: "100px",
          }}
        >
          <Image
            src="/assets/产品介绍/image.png"
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div>
          {/* 模块 01 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Title number="01" />
            <div
              style={{ fontSize: "20px", fontWeight: "bold", color: "#003366" }}
            >
              更高输出功率
            </div>
          </div>
          <div
            style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}
          >
            输出功率达到
            <span
              style={{ fontWeight: "bold", color: "#ff6a00", fontSize: "20px" }}
            >
              {" "}
              1.2W{" "}
            </span>
            稳定性高达
            <span
              style={{ fontWeight: "bold", color: "#ff6a00", fontSize: "20px" }}
            >
              {" "}
              ±0.41% 。
            </span>
          </div>
          {/* 模块 02 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Title number="02" />
            <div
              style={{ fontSize: "20px", fontWeight: "bold", color: "#003366" }}
            >
              更高的检测精度
            </div>
          </div>
          <div
            style={{ fontSize: "16px", color: "#333", marginBottom: "24px" }}
          >
            用于晶圆缺陷检测，可以完美覆盖
            <span
              style={{ fontWeight: "bold", color: "#ff6a00", fontSize: "20px" }}
            >
              {" "}
              14–28 nm{" "}
            </span>
            制程的芯片工艺流程，有效降低次品率。
          </div>
          {/* 模块 03 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Title number="03" />
            <div
              style={{ fontSize: "20px", fontWeight: "bold", color: "#003366" }}
            >
              更低的成本
            </div>
          </div>
          <div style={{ fontSize: "16px", color: "#333" }}>
            设备使用寿命高于
            <span
              style={{ fontWeight: "bold", color: "#ff6a00", fontSize: "20px" }}
            >
              {" "}
              3000 小时{" "}
            </span>
            ，避免频繁的更换倍频器件，提升设备使用率。
          </div>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        style={{
          // background: "rgba(0, 160, 255, 0.05)",
          borderRadius: 8,
        }}
      />
    </div>
  );
};
