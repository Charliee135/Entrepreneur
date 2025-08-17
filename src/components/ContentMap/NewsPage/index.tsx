import React from "react";
import { Carousel, Card } from "antd";
import Image from "next/image";
import "./carousel-dot.css";

export const NewsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        // backgroundColor: "#f5f5f5",
        gap: "40px",
      }}
    >
      {/* 左侧轮播图 */}
      <div style={{ width: 400 }}>
        <Carousel
          autoplay
          draggable
          dots={{ className: "my-custom-dots" }}
          style={{
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div>
            <Image
              src="/assets/新闻/new1.png"
              alt="新闻1"
              width={400}
              height={600}
              style={{
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          </div>
          <div>
            <Image
              src="/assets/新闻/new2.png"
              alt="新闻2"
              width={400}
              height={600}
              style={{
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          </div>
        </Carousel>
      </div>

      {/* 右侧新闻列表 */}
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <Card
          hoverable
          style={{ borderRadius: 12 }}
          bodyStyle={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <Image
            src="/assets/新闻/WechatIMG423.png"
            alt="商界新动态"
            width={60}
            height={60}
            style={{ borderRadius: 8 }}
          />
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              [商界新动态]
            </h2>
            <p style={{ margin: "8px 0 0", fontSize: 15, color: "#666" }}>
              芯维科技在深紫外激光器技术成果已成功应用于28mm芯片检测
              <span
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 4,
                }}
              >
                标志着我国在高端半导体检测装备领域迈出了重要一步。
              </span>
            </p>
          </div>
        </Card>

        <Card
          hoverable
          style={{ borderRadius: 12 }}
          bodyStyle={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <Image
            src="/assets/新闻/搜狐.png"
            alt="科技日讯报"
            width={60}
            height={60}
            style={{ borderRadius: 8 }}
          />
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              [科技日讯报]
            </h2>
            <p style={{ margin: "8px 0 0", fontSize: 15, color: "#666" }}>
              芯维科技技术团队凭借深厚的技术积累，采用先进的晶体生长工艺
              <span
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: 4,
                }}
              >
                成功研发出低缺陷密度的紫外倍频晶体。
              </span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
