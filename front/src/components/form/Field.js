import React from "react";
import { Form, Input } from 'antd';


export const Field = ({ type, value, handleInputChange }) =>
  (
    <Form.Item
      label={type.charAt(0).toUpperCase() + type.slice(1)}
      name={type}
      rules={[
        {
          required: true,
          message: `Please input your ${type}!`,
        },
      ]}
    >
      <Input {...{ type, value }} name={type} onChange={handleInputChange} />
    </Form.Item>

  )
