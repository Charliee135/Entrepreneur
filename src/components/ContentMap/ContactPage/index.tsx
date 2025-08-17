import React from "react";
import { Card } from "antd";

export const ContactUs: React.FC = () => {
  return (
    <div
      style={{
        // background: "#f5f5f5",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Card
        title="联系我们"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          //   background: "#f5f5f5",
        }}
        styles={{
          header: {
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "center",
          },
          body: {
            fontSize: "16px",
            lineHeight: "2",
            color: "#333",
          },
        }}
      >
        <p>
          <strong>地址：</strong>
          中国（山东）自由贸易试验区济南片区舜华路街道颖秀路2600号山东大学科技产业园7号楼401
        </p>
        <p>
          <strong>电话：</strong>
          <br />
          总经理：<a href="tel:18253790318">18253790318</a>
          <br />
          销售经理：<a href="tel:13355196672">13355196672</a>
        </p>
        <p>
          <strong>邮箱：</strong>{" "}
          <a href="mailto:2088248178@qq.com">2088248178@qq.com</a>
        </p>
        <p>
          <strong>办事处：</strong> 济南、青岛、济宁、临沂
        </p>
      </Card>
    </div>
  );
};
