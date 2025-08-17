import { Image } from "antd";
import React from "react";

export const TopView = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/image2.png)`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        width: "100%",
        height: "350px",
        alignContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 35,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        芯维（山东）检测科技有限公司
      </h1>
      <div style={{ marginTop: "15px", position: "absolute" }}>
        <Image src="/assets/logo.png" width={100} alt="" preview={false} />
      </div>
    </div>
  );
};
