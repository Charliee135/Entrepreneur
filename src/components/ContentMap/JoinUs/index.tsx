import React from "react";
import { Card, Collapse } from "antd";
import Image from "antd/es/image";
import { Divider } from "@/components/Divider";
import Paragraph from "antd/es/typography/Paragraph";
import { RiseOutlined } from "@ant-design/icons";

const jobs = [
  {
    title: "激光工程师",
    duties: [
      "承担新技术、新型固体、半导体、光纤激光器的研发工作；",
      "承担相应分激光器的设计、调试工作。",
    ],
    key: "0",
  },
  {
    title: "光学设计工程师",
    duties: [
      "负责光学仪器、光谱检测和光电仪设备的研发设计工作；",
      "参与光学设计分析结果的评审工作。",
    ],
    key: "1",
  },
  {
    title: "电子工程师",
    duties: [
      "负责电路板设计以及集成电路、电子电气相关设备的生产研发工作；",
      "电子元器件试验、检测技术及其应用的研究开发工作。",
    ],
    key: "2",
  },
  {
    title: "机械设计工程师",
    duties: [
      "负责机械设备及有关零部件的图纸设计、安装试运行，制定机械设备的操作规程；",
      "机械设备定期检查维护，对存在的缺陷及时进行技术改造或调整，并负责监督修、升级改造等工作的实施与监督，确保设备运行在良好的状态。",
    ],
    key: "3",
  },
  {
    title: "项目经理",
    duties: [
      "在研究范围内领导项目小组按时优质地完成全部项目工作内容，并使客户满意；",
      "签订合同与条约，监督合同执行，处理合同变更。",
    ],
    key: "4",
  },
  {
    title: "营销经理",
    duties: [
      "负责产品的市场渠道开拓与销售工作，制定并执行销售计划，带领团队高效完成公司下达的销售目标；",
      "与客户保持良好沟通，实时满足客户需求。",
    ],
    key: "5",
  },
];

export const JoinUs: React.FC = () => {
  return (
    <div>
      <Image
        src="/assets/加入背景/image.png"
        alt=""
        width="100%"
        height={350}
        preview={false}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          人才理念
        </h1>
        <Divider />
      </div>
      <h1
        style={{
          marginLeft: "20px",
          color: "grey",
          fontSize: "17px",
          fontWeight: "500",
          lineHeight: "2",
        }}
      >
        我们打造完善的人才培养体系，激励员工开放发展、提升自我。﻿
        我们鼓励自我管理，团结担当，营造健康积极的团队氛围。﻿
        我们重视创新与成长，提供愉悦且亲近大自然的企业文化环境。﻿
        我们诚心邀请您加入，共同奔赴让中国人骄傲的新兴半导体企业。
      </h1>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          所有岗位
        </h1>
        <Divider />
      </div>
      <div>
        <Collapse
          bordered={false}
          expandIconPosition="end"
          defaultActiveKey={["0", "1", "2", "3", "4", "5"]}
          items={jobs.map((job, index) => ({
            key: String(index),
            label: (
              <span className="font-semibold text-lg flex items-center gap-2">
                <RiseOutlined style={{ color: "#1677ff" }} />
                {job.title}
              </span>
            ),
            children: (
              <Card
                size="small"
                style={{ borderRadius: 12, background: "#fafafa" }}
              >
                {job.duties.map((duty, i) => (
                  <Paragraph key={i} style={{ marginBottom: 8 }}>
                    • {duty}
                  </Paragraph>
                ))}
              </Card>
            ),
          }))}
        />
      </div>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <h1
          style={{
            textAlign: "start",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1677ff",
          }}
        >
          联系我们
        </h1>
        <Divider />
      </div>
      <div>
        <p>
          <strong style={{ fontSize: "18px" }}>邮箱：</strong>{" "}
          <a href="mailto:2088248178@qq.com" style={{ fontSize: "16px" }}>
            2088248178@qq.com
          </a>
        </p>
        <p style={{ fontSize: "17px", fontWeight: "500", marginTop: "10px" }}>
          诚聘英才，期待您的加入！
        </p>
      </div>
    </div>
  );
};
