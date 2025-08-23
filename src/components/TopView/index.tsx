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
          backgroundImage: `url(/assets/top.png)`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          width: "100%",
          height: "300px",
          // alignContent: "center",
        }}
      />
    </div>
  );
};
