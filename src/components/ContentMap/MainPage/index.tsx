import { Divider } from "@/components/Divider";
import { Carousel, List } from "antd";
import Image from "antd/es/image";
import React from "react";
import { WhyChooseUs } from "../QuestionPage";

const imgUrl = [
  "/assets/首页/轮播图/3.png",
  "/assets/首页/轮播图/4.png",
  "/assets/首页/轮播图/5.png",
  "/assets/首页/轮播图/1.png",
  "/assets/首页/轮播图/2.png",
];

const data = [
  "产学研联动！芯维科技携手高校攻克“卡脖子技术”",
  "产学研协同创新成果丰硕 芯维科技深紫外激光器获行业认可",
];

export const MainPage: React.FC = () => {
  return (
    <div>
      <Carousel
        autoplay
        draggable
        style={{
          width: "85%",
          height: "450px",
          backgroundColor: "#f0f2f5",
          justifySelf: "center",
        }}
      >
        {imgUrl.map((url, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={url}
              preview={false}
              alt={`轮播图 ${index + 1}`}
              width={900}
              height={500}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* 新闻List */}
      <div style={{ marginTop: "80px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          新闻动态
        </h1>
        <Divider />
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <span style={{ fontSize: "16px" }}>{item}</span>
            </List.Item>
          )}
          footer={
            <span style={{ fontWeight: "500" }}>
              受齐鲁工业大学（山东省科学院）校领导关怀与鼓励
            </span>
          }
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          专家推荐
        </h1>
        <Divider />
        <div style={{ marginTop: "20px" }}>
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};
