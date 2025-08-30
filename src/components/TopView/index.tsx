import { Image } from "antd";
import React from "react";

export const TopView = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Image src="/assets/logo.png" width={60} alt="" preview={false} />
        <h1
          style={{
            fontSize: 35,
            fontWeight: "500",
          }}
        >
          芯维（山东）检测科技有限公司
        </h1>
      </div>
      <div
        style={{
          backgroundImage: `url(/assets/产品介绍/bg2.png)`,
          backgroundSize: "fill",
          width: "100%",
          height: "350px",
          borderRadius: 10,
        }}
      />
    </div>
  );
};
