import React from 'react';
import { Space, Spin } from 'antd';
const styling = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "50"
};
const SpinComponent = () => (
  <Space size="middle" style={styling}>
    <Spin size="large" />
  </Space>
);
export default SpinComponent;