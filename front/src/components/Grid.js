import React from "react";
import { Col } from "antd"

export const RightCol = ({ children }) => (
  <Col span={10} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>{children}</Col>
)

export const LeftCol = ({ children }) => (
  <Col span={14}>{children}</Col>
)