import React from "react";
import { Select as Selects, Space } from "antd";
const { Option: Options } = Selects;

const handleChange = (value: string[]) => {};

const InputTags: React.FC = () => (
  <Selects
    mode="multiple"
    placeholder="select one country"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Options value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Options>
    <Options value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Options>
    <Options value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Options>
    <Options value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Options>
  </Selects>
);

export default InputTags;
