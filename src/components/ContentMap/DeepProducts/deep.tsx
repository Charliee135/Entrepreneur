import React from "react";
import Image from "next/image";

type TitleProps = {
  number: string;
};

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
    <div
      style={{
        //   background: "#fff",
        padding: "20px 30px",
        // background: "blue",
        borderRadius: "10px",
        maxWidth: "85%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "row",
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
        <div style={{ fontSize: "16px", marginBottom: "24px", color: "#333" }}>
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
        <div style={{ fontSize: "16px", color: "#333", marginBottom: "24px" }}>
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
  );
};
