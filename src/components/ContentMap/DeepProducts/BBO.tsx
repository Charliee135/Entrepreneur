import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import Image from "next/image";

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
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "#ff6a00",
          fontSize: "20px",
          justifySelf: "center",
        }}
      >
        使用寿命长达3000h
      </h1>
      <div
        style={{
          // background: "blue",
          padding: "20px 30px",
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
          <div style={{ marginLeft: "50px" }}>
            <Image
              src="/assets/产品介绍/晶体.png"
              alt=""
              width={230}
              height={210}
              style={{ borderRadius: "10px" }}
            />
            <Image
              src="/assets/产品介绍/improve晶体.png"
              alt=""
              width={230}
              height={220}
              style={{ borderRadius: "10px", marginTop: "10px" }}
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
