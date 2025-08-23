import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import Image from "next/image";
import { Divider } from "@/components/Divider";

interface DataType {
  key: string;
  standard: string;
  normal: string;
  improved: string;
  level: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "指标",
    dataIndex: "standard",
    key: "standard",
    render: (text) => (
      <div style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}>
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "常规晶体",
    dataIndex: "normal",
    key: "normal",
    render: (text) => (
      <div style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}>
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "优化后晶体",
    dataIndex: "improved",
    key: "improved",
    render: (text) => (
      <div style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}>
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "提升幅度",
    key: "level",
    dataIndex: "level",
    render: (text) => (
      <div style={{ fontWeight: "bold", color: "#ff6a00", fontSize: "20px" }}>
        <span>{text}</span>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    standard: "损伤阀值@261nm（GW/cm²）",
    normal: "0.15",
    improved: "0.48",
    level: "320%",
  },
  {
    key: "2",
    standard: "体缺陷密度（cm⁻³）",
    normal: "5.6 * 10^7",
    improved: "7.2 * 10^6",
    level: "87.1%",
  },
  {
    key: "3",
    standard: "热导率各向异性系数",
    normal: "2.8",
    improved: "1.3",
    level: "53.6%",
  },
  {
    key: "4",
    standard: "相位匹配温度带宽（℃）",
    normal: "1.7",
    improved: "4.2",
    level: "147%",
  },
];

export const BBOProduct: React.FC = () => {
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
          src="/assets/产品介绍/bg.png"
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
          抗灰迹BBO晶体能够承受更高的激光功率密度，适用于高功率密度的深紫外激光器，确保在高能量输出的芯片质检过程中晶体不易损伤，延长使用寿命。同时通过改进工艺有效抑制灰迹形成，保证激光输出的长期稳定性。抗灰迹BBO晶体还可透过波段范围宽（190nm~3500nm），适用于深紫外激光器的多种频率转换需求。﻿
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
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "#ff6a00",
          fontSize: "25px",
          justifySelf: "center",
          fontStyle: "italic",
        }}
      >
        使用寿命长达3000h
      </h1>
      <div
        style={{
          borderRadius: "10px",
          maxWidth: "85%",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <div
            style={{
              marginRight: "40px",
            }}
          >
            <Image
              src="/assets/产品介绍/晶体.png"
              alt=""
              width={250}
              height={230}
              style={{ borderRadius: "10px" }}
            />
            <Image
              src="/assets/产品介绍/improve晶体.png"
              alt=""
              width={250}
              height={220}
              style={{ borderRadius: "10px", marginTop: "45px" }}
            />
          </div>
        </div>
        <div style={{ width: "800px" }}>
          <Table<DataType>
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};
