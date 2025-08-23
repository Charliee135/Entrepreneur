import React from "react";
import { Row, Col, Card, Typography } from "antd";
import Image from "next/image";

const { Title, Paragraph, Text } = Typography;

const experts = [
  {
    name: "薛其坤",
    title: "中国科学院院士",
    avatar: "/assets/院士推荐/薛.png",
    letter: "/assets/院士推荐信/薛.png",
    desc: "清华大学教授，博士生导师，长期从事凝聚态物理与先进激光器件研究，带领团队多次取得国际领先成果。",
    quote:
      "开创了激光与信频两效应最佳耦合原则的新思路，开辟了非主平面切割的新方法。",
  },
  {
    name: "吴以成",
    title: "中国工程院院士",
    avatar: "/assets/院士推荐/吴.png",
    letter: "/assets/院士推荐信/薛.png",
    desc: "天津理工大学教授，博士生导师，曾任中国晶体学会副理事长，长期致力于非线性光学材料研究与发展。",
    quote:
      "开创了抗灰迹倍频晶体制备新思路，其研发的深紫外激光器用倍频器件性能优越。",
  },
  {
    name: "许崇海",
    title: "齐鲁工业大学（山东省科学院）副校长（副院长）",
    avatar: "/assets/院士推荐/许.png",
    letter: "/assets/院士推荐信/许.jpeg",
    desc: "教育部新世纪优秀人才支持计划入选者，全国百篇优秀博士学位论文提名论文获得者，山东省有突出贡献的青年专家，山东省自然科学杰出青年基金获得者，中国人民政治协商会议山东省第十三届委员会委员",
    quote: "缓解我国半导体产业链核心光源’窒息之痛‘。",
  },
  {
    name: "王继扬",
    title: "国家973计划领域专家",
    avatar: "/assets/院士推荐/王.png",
    letter: "/assets/院士推荐信/王.png",
    desc: "山东省硅酸盐学会理事长，中国硅酸盐学会晶体生长与材料分会理事长，山东大学国防科技委主任，国家自然科学基金委重大研究计划管理专家",
    quote: "其技术沉淀与执行力实属青年科研团队典范。",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    // <div style={{ padding: "60px 80px" }}>
    <div>
      {/* <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "40px", fontWeight: 700 }}
      >
        为什么选择我们？
      </Title> */}

      <Row gutter={[32, 32]} justify="center">
        {experts.map((exp, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card
              hoverable
              style={{
                borderRadius: 12,
                minHeight: 320,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: 20,
              }}
              //   bodyStyle={{ padding: 0 }}
            >
              <div
                style={{
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Image
                  src={exp.avatar}
                  alt={exp.name}
                  width={100}
                  height={80}
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
                <Image
                  src={exp.letter}
                  alt=""
                  style={{
                    borderRadius: 8,
                    objectFit: "contain",
                    border: "1px solid #0A74DA",
                  }}
                  width={280}
                  height={80}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ marginBottom: 4 }}>
                  {exp.name}
                </Title>
                <Text type="secondary" style={{ fontSize: 14 }}>
                  {exp.title}
                </Text>
                <Paragraph style={{ marginTop: 8, fontSize: 14 }}>
                  {exp.desc}
                </Paragraph>
                <Paragraph
                  style={{
                    marginTop: 12,
                    fontStyle: "italic",
                    color: "#0A74DA",
                    fontWeight: 500,
                  }}
                >
                  “{exp.quote}”
                </Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
