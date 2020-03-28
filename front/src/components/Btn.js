import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

export const Btn = ({ to, children, onClick = "" }) => (
  <Link to={to}><Button className="button" {...{ onClick }} >{children}</Button></Link>
)

export const SubmitBtn = ({ children, htmlType }) => (
  <Button className="button" {...{ htmlType }}>{children}</Button>
)