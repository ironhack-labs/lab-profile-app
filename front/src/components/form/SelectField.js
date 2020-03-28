import React from "react";
import { Form, Select } from 'antd';
const { Option } = Select;


export const SelectField = ({ type, options, handleInputChange }) => (
  <Form.Item label={type.charAt(0).toUpperCase() + type.slice(1)}
    name={type} rules={[{ required: true }]}>
    <Select
      placeholder={`Select a ${type}`}
      onChange={e => { handleInputChange({ "target": { "value": e, "name": type } }) }}
    >
      {options.map((e, i) => <Option key={i} value={e}>{e}</Option>)}

    </Select>
  </Form.Item >
)
