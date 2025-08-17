import React from "react";
import { Row, Col, Avatar, Card, Image as AntdImage, Space } from "antd";
import Image from "next/image";
import { Divider } from "@/components/Divider";

const data = [
  {
    title: "非凡光电",
    avatar: "/assets/客户/非凡.png",
  },
  {
    title: "无锡光研",
    avatar: "/assets/客户/无锡.png",
  },
  {
    title: "奇峰蓝达",
    avatar: "/assets/客户/奇峰.png",
  },
  {
    title: "福晶科技",
    avatar: "/assets/客户/福晶.png",
  },
  {
    title: "华特达因",
    avatar: "/assets/客户/华特.png",
  },
  {
    title: "长光华芯",
    avatar: "/assets/客户/华芯.png",
  },
  {
    title: "波威科技",
    avatar: "/assets/客户/波威.png",
  },
  {
    title: "山东大学，天津大学，烟台大学 ",
    avatar: [
      "/assets/客户/山大.png",
      "/assets/客户/天津大学.png",
      "/assets/客户/烟台大学.png",
    ],
  },
];

const honorData = [
  "/assets/荣誉/4101754710424_.pic.jpg",
  "/assets/荣誉/4111754710438_.pic.jpg",
  "/assets/荣誉/4121754710444_.pic.jpg",
  "/assets/荣誉/4141754710469_.pic.jpg",
  "/assets/荣誉/4151754710474_.pic.jpg",
  "/assets/荣誉/4161754710479_.pic.jpg",
  "/assets/荣誉/4171754710484_.pic.jpg",
  "/assets/荣誉/4181754710488_.pic.jpg",
  "/assets/荣誉/4191754710493_.pic.jpg",
  "/assets/荣誉/4201754710498_.pic.jpg",
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <Row className="flex flex-row">
        <Col span={8}>
          <h1 style={{ fontSize: "40px", fontWeight: "600", color: "black" }}>
            我们是谁
          </h1>
          <Divider />
        </Col>
        <Col span={16}>
          <h1
            style={{
              textAlign: "justify",
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: 2.1,
              color: "grey",
            }}
          >
            芯维（山东）检测科技有限公司于2025年6月成立，是一家聚焦半导体芯片检测核心技术的高科技企业，依托国家政策对半导体及深紫外激光产业的战略扶持，针对国内高功率连续波深紫外激光器被国外垄断、国产设备依赖进口的行业痛点，以自主研发的XWDUV28高功率深紫外激光器为核心产品，瞄准14-28nm及以上制程芯片缺陷检测领域。公司锚定“国产替代先锋”与“全球技术引领者”双重定位：短期通过突破技术空白快速提升国内设备国产化率，填补市场缺口；中长期凭借高效泵浦、光斑整形、单频转换激光输出系统、高损伤阈值晶体生长等核心技术构建的成本与资源优势，参与全球竞争，计划到2033年实现全球20%市场份额目标，推动中国芯片产业从“依赖进口”向“自主创新、全球输出”转型，助力我国成为芯片强国。公司围绕激光器研发构建了涵盖研发历程、核心技术、商业闭环、财务规划、团队管理等完整体系，通过直营、代理、技术服务等多元模式拓展市场，同步布局三年阶段性发展目标，旨在通过技术攻坚与产业协同，重塑全球芯片检测设备产业格局。
          </h1>
          <div className="flex flex-row">
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "black",
              }}
            >
              致力于
            </h1>
            <h1
              style={{
                alignSelf: "center",
                paddingLeft: "10px",
                color: "grey",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              打破国外垄断，完成深紫外激光器的国产替代，开辟中国深紫外激光器新篇章。
            </h1>
          </div>
        </Col>
      </Row>

      {/* 公司荣誉 */}
      <Row className="flex flex-row mt-15">
        <Col span={16}>
          <div className="grid grid-cols-3 gap-6">
            {honorData.map((item, index) => (
              <Card
                key={index}
                hoverable
                styles={{ body: { padding: 8 } }}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <AntdImage
                  src={item}
                  alt={`honor-${index}`}
                  width={140}
                  height={170}
                  preview={true}
                />
              </Card>
            ))}
          </div>
        </Col>
        <Col span={8}>
          <div style={{ justifySelf: "center" }}>
            <h1 style={{ fontSize: "40px", fontWeight: "600", color: "black" }}>
              公司荣誉
            </h1>
            <Divider />
          </div>
          <Image
            src="/assets/荣誉/4091754710391_.pic.jpg"
            width={220}
            height={60}
            alt="company-honor"
            style={{
              // alignSelf: "center",
              marginTop: "20px",
              borderRadius: "8px",
              justifySelf: "center",
            }}
          />
        </Col>
      </Row>

      {/* 典型客户 */}
      <Row className="flex flex-row mt-15">
        <Col span={8}>
          <div>
            <h1 style={{ fontSize: "40px", fontWeight: "600", color: "black" }}>
              典型客户
            </h1>
            <Divider />
          </div>
        </Col>
        <Col span={16}>
          <div
            className="grid grid-cols-3 gap-6 mt-4"
            style={{ alignItems: "baseline" }}
          >
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-blue">
                {Array.isArray(item.avatar) ? (
                  <Space>
                    {item.avatar.map((url, i) => (
                      <Image
                        key={i}
                        src={url}
                        alt={`client-${i}`}
                        width={80}
                        height={60}
                        style={{
                          objectFit: "contain",
                          maxHeight: "60px",
                          maxWidth: "80px",
                        }}
                      />
                    ))}
                  </Space>
                ) : (
                  <Image
                    alt=""
                    src={item.avatar}
                    width={100}
                    height={70}
                    style={{
                      objectFit: "contain",
                      maxHeight: "70px",
                      maxWidth: "100px",
                    }}
                  />
                )}
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "grey",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};
