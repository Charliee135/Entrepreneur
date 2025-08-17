import React, { useState } from "react";
import { Segmented } from "antd";
import { BBOProduct } from "./BBO";
import { DeepProducts } from "./deep";

export const Products: React.FC = () => {
  const [selected, setSelected] = useState("深紫外激光器");
  return (
    <div>
      <div style={{ alignSelf: "center", justifySelf: "center" }}>
        <Segmented
          options={["深紫外激光器", "抗灰迹BBO晶体及器件"]}
          size="large"
          value={selected}
          onChange={(value: string) => setSelected(value as string)}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        {selected === "深紫外激光器" && <DeepProducts />}
        {selected === "抗灰迹BBO晶体及器件" && <BBOProduct />}
      </div>
    </div>
  );
};
